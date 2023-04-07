import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IntentionsPage } from "@components/pages/IntentionsPage";
import { AnnouncementPage } from "@components/pages/AnnouncementPage";
import { MainPage } from "@components/pages/MainPage";
import { AppLayout } from "@components/ui/AppLayout";
import { getDataFrom } from "@utils/network.util";
import { ErrorPage } from "@components/pages/ErrorPage";
import { PageRouter } from "@enums/page-router.enum";
import { MinistryGroupsPage } from "@components/pages/ministry/MinistryGroupsPage";
import { MinistryFuneralPage } from "@components/pages/ministry/MinistryFuneralPage";
import { ParishCouncilPage } from "@components/pages/parish/ParishCouncilPage";
import { ParishOfficePage } from "@components/pages/parish/ParishOfficePage";
import { ParishPatronPage } from "@components/pages/parish/ParishPatronPage";
import { ParishPriestsPage } from "@components/pages/parish/ParishPriestsPage";
import { MinistrySacramentPage } from "@components/pages/ministry/MinistrySacramentPage";
import { ContactPage } from "@components/pages/ContactPage";
import { NotFound } from "@components/pages/NotFound";
import { GalleryPage } from "@components/pages/GalleryPage";
import { AlbumPage } from "@components/pages/AlbumPage";
import { ParishServicesPage } from "@components/pages/parish/ParishServicesPage";
import { createRoot } from "react-dom/client";

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
        loader: () => getDataFrom(PageRouter.Intentions, rootElement),
        shouldRevalidate: ({ currentUrl }) =>
          currentUrl.pathname !== PageRouter.Intentions,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.Announcement,
        element: <AnnouncementPage />,
        loader: () => getDataFrom(PageRouter.AnnouncementActive, rootElement),
        shouldRevalidate: ({ currentUrl }) =>
          currentUrl.pathname !== PageRouter.Announcement,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.Gallery,
        element: <GalleryPage />,
        loader: () => getDataFrom(PageRouter.AlbumTypes, rootElement),
        shouldRevalidate: ({ currentUrl }) =>
          currentUrl.pathname !== PageRouter.Gallery,
      },
      {
        path: PageRouter.OneAlbum,
        element: <AlbumPage />,
        loader: ({ params }) =>
          getDataFrom(
            `${PageRouter.Album}${params.id}` as PageRouter,
            rootElement
          ),
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
