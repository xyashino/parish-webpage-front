import { ArticleType } from '../enums/article.enum';

export interface Article {
  id: string;

  type: ArticleType;

  title: string;

  body: string;

  createdAt: Date;

  updatedAt: Date;

  order: number;

  show: boolean;
}
