import { PageRouter } from "@enums/page-router.enum";
import { Page } from "../types/page.interface";

export const NAVBAR_ITEMS_ORDER: PageRouter[] = [
  PageRouter.Announcement,
  PageRouter.Intentions,
  PageRouter.Ministry,
  PageRouter.Parish,
  PageRouter.Services,
  PageRouter.Contact,
];

const MAIN_MENU_DATA: [PageRouter, Page][] = [
  [PageRouter.Main, { name: "Strona Głowna" }],
  [PageRouter.Announcement, { name: "Ogłoszenia" }],
  [PageRouter.Intentions, { name: "Intencje" }],
  [
    PageRouter.Ministry,
    {
      name: "Duszpastertstwo",
      submenu: [
        {
          submenuRoute: PageRouter.MinistrySacrament,
          submenuName: "Sakramenty",
        },
        {
          submenuRoute: PageRouter.MinistryFuneral,
          submenuName: "Pogrzeb",
        },
        {
          submenuRoute: PageRouter.MinistryGroups,
          submenuName: "Grupy duszpasterskie",
        },
      ],
    },
  ],
  [
    PageRouter.Services,
    {
      name: "Nabożeństwa",
      submenu: [
        {
          submenuRoute: PageRouter.Services,
          submenuName: "Nabożeństwa - Msze św.",
        },
        {
          submenuRoute: PageRouter.ServicesAdoration,
          submenuName: "Adoracja Najświętszego Sakramentu",
        },
        {
          submenuRoute: PageRouter.ServicesConfession,
          submenuName: "Spowiedź św.",
        },
      ],
    },
  ],
  [
    PageRouter.Parish,
    {
      name: "Parafia",
      submenu: [
        {
          submenuRoute: PageRouter.ParishPatron,
          submenuName: "Patron parafii",
        },
        {
          submenuRoute: PageRouter.ParishHistory,
          submenuName: "Historia",
        },
        {
          submenuRoute: PageRouter.ParishOffice,
          submenuName: "Kancelaria parafialna",
        },
        {
          submenuRoute: PageRouter.ParishCouncil,
          submenuName: "Rada Duszpasterka",
        },
        {
          submenuRoute: PageRouter.ParishPriests,
          submenuName: "Proboszczowie w historii parafii",
        },
        {
          submenuRoute: PageRouter.ParishNationals,
          submenuName: "Kapłani rodacy",
        },
      ],
    },
  ],
  [PageRouter.Contact, { name: "Kontakt" }],
];
export const MENU_DATA = new Map(MAIN_MENU_DATA);
