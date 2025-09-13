export interface ITodo {
  body: string  | null | undefined;
  title: string;
  id?: string | undefined;
  completed: boolean | undefined | null;
  createdAt?: Date  | null;
  userId?: string | null;
}
// { 
//   userId: string;
//    id: string;
//     title: string;
//      body: string | null;
//       completed: boolean | null;
//        createdAt: Date | null;
//        }