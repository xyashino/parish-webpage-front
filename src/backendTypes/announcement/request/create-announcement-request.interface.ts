import { CreateAnnouncementItem } from './create-announcement-item.interface';

export interface CreateAnnouncementRequest {
  title: string;
  subtitle: string;
  announcements: CreateAnnouncementItem[];
}
