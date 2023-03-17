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
import { ParishHistoryPage } from "@components/pages/parish/ParishHistoryPage";
import { ParishNationalsPage } from "@components/pages/parish/ParishNationalsPage";
import { ParishOfficePage } from "@components/pages/parish/ParishOfficePage";
import { ParishPatronPage } from "@components/pages/parish/ParishPatronPage";
import { ParishPriestsPage } from "@components/pages/parish/ParishPriestsPage";
import { ServicesPage } from "@components/pages/services/ServicesPage";
import { ServicesConfessionPage } from "@components/pages/services/ServicesConfessionPage";
import { ServicesAdorationPage } from "@components/pages/services/ServicesAdorationPage";
import { MinistrySacramentPage } from "@components/pages/ministry/MinistrySacramentPage";
import { ContactPage } from "@components/pages/ContactPage";
import { NotFound } from "@components/pages/NotFound";
import { GalleryPage } from "@components/pages/GalleryPage";
import { AlbumPage } from "@components/pages/AlbumPage";

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
        path: PageRouter.Intentions,
        element: <IntentionsPage />,
        loader: () => getDataFrom(PageRouter.Intentions),
        shouldRevalidate: ({ currentUrl }) =>
          currentUrl.pathname !== PageRouter.Intentions,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.Announcement,
        element: <AnnouncementPage />,
        loader: () => getDataFrom(PageRouter.Announcement),
        shouldRevalidate: ({ currentUrl }) =>
          currentUrl.pathname !== PageRouter.Announcement,
        errorElement: <ErrorPage />,
      },
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
      {
        path: PageRouter.ParishCouncil,
        element: <ParishCouncilPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.ParishHistory,
        element: <ParishHistoryPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.ParishNationals,
        element: <ParishNationalsPage />,
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
        path: PageRouter.Services,
        element: <ServicesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.ServicesConfession,
        element: <ServicesConfessionPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.ServicesAdoration,
        element: <ServicesAdorationPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.Contact,
        element: <ContactPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: PageRouter.Gallery,
        element: <GalleryPage />,
        loader: () => getDataFrom("/albums/types" as PageRouter),
        shouldRevalidate: ({ currentUrl }) =>
          currentUrl.pathname !== PageRouter.Gallery,
      },
      {
        path: `album/:id`,
        element: <AlbumPage />,
        loader: ({ params }) =>
          getDataFrom(`/albums/${params.id}` as PageRouter),
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
