import { Day } from '../enums/day.enum';
import { IntentionResponse } from './intention-response.interface';

export interface DayIntentionsResponse {
  id: string;
  day: Day;
  dateOfDay: null | string | Date;
  intentions: IntentionResponse[];
}
