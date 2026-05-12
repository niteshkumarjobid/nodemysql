export interface Article {
  id?: number;
  title: string;
  keywords: string;
  summary: string;
  author: string;
  content: string;
  publish_time: Date;
  modified_time: Date;
}