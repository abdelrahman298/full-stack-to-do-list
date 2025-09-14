export interface ITodo {
  id?: string | undefined;
  body: string  | null | undefined;
  title: string;
  completed: boolean | undefined | null;
  createdAt?: Date  | null;
  userId?: string | null;
}
