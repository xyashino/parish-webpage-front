import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "@components/ui/AppLayout";
import { getDataFrom } from "@utils/network.util";
import { PageRouter } from "@enums/page-router.enum";
import { createRoot } from "react-dom/client";
import { ErrorPage } from "@pages/ErrorPage";
import { MinistrySacramentPage } from "@pages/ministry/MinistrySacramentPage";
import { MinistryFuneralPage } from "@pages/ministry/MinistryFuneralPage";
import { MinistryGroupsPage } from "@pages/ministry/MinistryGroupsPage";
import { ParishCouncilPage } from "@pages/parish/ParishCouncilPage";
import { ParishOfficePage } from "@pages/parish/ParishOfficePage";
import { ParishPatronPage } from "@pages/parish/ParishPatronPage";
import { ParishPriestsPage } from "@pages/parish/ParishPriestsPage";
import { ParishServicesPage } from "@pages/parish/ParishServicesPage";
import { ContactPage } from "@pages/ContactPage";
import { GalleryPage } from "@pages/GalleryPage";
import { AlbumPage } from "@pages/AlbumPage";
import { NotFound } from "@pages/NotFound";
import { MainPage } from "@pages/MainPage";
import { IntentionsPage } from "@pages/IntentionsPage";
import { AnnouncementPage } from "@pages/AnnouncementPage";
import { RequestPath } from "@enums/request-path.enum";

const loaderElement = document.getElementById("loader");
const rootElement = createRoot(loaderElement as HTMLElement);

const routers = createBrowserRouter([
  {
    path: PageRouter.Main,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.Ministry,
        children: [
          {
            path: PageRouter.MinistrySacrament,
            element: <MinistrySacramentPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PageRouter.MinistryFuneral,
            element: <MinistryFuneralPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PageRouter.MinistryGroups,
            element: <MinistryGroupsPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: PageRouter.Parish,
        children: [
          {
            path: PageRouter.ParishCouncil,
            element: <ParishCouncilPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PageRouter.ParishOffice,
            element: <ParishOfficePage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PageRouter.ParishPatron,
            element: <ParishPatronPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PageRouter.ParishPriests,
            element: <ParishPriestsPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PageRouter.ParishServices,
            element: <ParishServicesPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: PageRouter.Contact,
        element: <ContactPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.Intentions,
        element: <IntentionsPage />,
        loader: () => getDataFrom(RequestPath.GetIntentions, rootElement),
        shouldRevalidate: ({ currentUrl }) =>
          currentUrl.pathname !== PageRouter.Intentions,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.Announcement,
        element: <AnnouncementPage />,
        loader: () => getDataFrom(RequestPath.GetAnnouncement, rootElement),
        shouldRevalidate: ({ currentUrl }) =>
          currentUrl.pathname !== PageRouter.Announcement,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.Gallery,
        element: <GalleryPage />,
        errorElement: <ErrorPage />,
        loader: () => getDataFrom(PageRouter.AlbumTypes, rootElement),
        shouldRevalidate: ({ currentUrl }) =>
          currentUrl.pathname !== PageRouter.Gallery,
      },
      {
        path: PageRouter.OneAlbum,
        element: <AlbumPage />,
        loader: ({ params }) =>
          getDataFrom(`${RequestPath.GetOneAlbum}${params.id}`, rootElement),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={routers} />;
};

export default App;
