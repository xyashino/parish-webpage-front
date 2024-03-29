export const enum PageRouter {
  //MINISTRY
  Ministry = "/ministry/",
  MinistryFuneral = "/ministry/funeral/",
  MinistrySacrament = "/ministry/sacrament/",
  MinistryGroups = "/ministry/groups/",

  //PARISH
  Parish = "/parish/",
  ParishCouncil = "/parish/council/",
  ParishOffice = "/parish/office/",
  ParishPriests = "/parish/priests-history/",
  ParishPatron = "/parish/patron/",
  ParishNationals = "/parish/priests-nationals/",
  ParishServices = "/parish/services/",

  //ALBUM
  Album = "/albums/",
  AlbumTypes = "/albums/types/",
  //ANNOUNCEMENTS
  Announcement = "/announcements/",
  AnnouncementActive = "/announcements?status=ACTIVE",
  //OTHERS

  OneAlbum = "/albums/:id/",
  Main = "/",
  Intentions = "/intentions/",
  Contact = "/contact/",

  Gallery = "/gallery/",
}
