import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LucidePenLine, LucideTrash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Todo } from "@/interfaces";

export function TodoTable(todoList) {
  // console.log("from todo " + JSON.stringify(todoList));

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todoList?.todoList.map((todo: Todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge>completed</Badge>
              ) : (
                <Badge variant="destructive">uncompleted</Badge>
              )}
            </TableCell>
            <TableCell className="flex space-x-2 items-center">
              <Button variant="default" size="icon">
                <LucidePenLine size={16} />
              </Button>

              <Button variant="destructive" size="icon">
                <LucideTrash2 size={16} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
