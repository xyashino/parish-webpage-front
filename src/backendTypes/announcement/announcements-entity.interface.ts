import { AnnouncementsItem } from './announcement-item-entity.interface';

export interface Announcements {
  id: string;
  title: string;
  subtitle: string;

  announcements: AnnouncementsItem[];
}

export interface AnnouncementsResponse extends Announcements {}
