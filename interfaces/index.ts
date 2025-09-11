export interface ITodo {
  body: string | undefined;
  title: string;
  id: string | undefined;
  completed: boolean | undefined;
  createdAt?: Date;
}
