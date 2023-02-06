import { CreateAnnouncementItem } from './create-announcement-item.interface';

export interface UpdateAnnouncementRequest {
  title?: string;
  subtitle?: string;
  announcements: CreateAnnouncementItem[];
}
