"use client";
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
// import { LucidePenLine, LucideTrash2 } from "lucide-react";
// import { FaSpinner } from "react-icons/fa";

// import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ITodo } from "@/interfaces";
// import { deleteTodoActions } from "@/app/actions";
// import { useState } from "react";
import ActionsButton from "./actionsButton";

export function TodoTable({todoList}:{todoList:ITodo[]}) {
  console.log("from todo " + JSON.stringify(todoList));
  console.log("from todo table " +todoList);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>body</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todoList.length === 0 ? "there're no TOdo Yet" : todoList.map((todo: ITodo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>{todo.body}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge>completed</Badge>
              ) : (
                <Badge variant="destructive">uncompleted</Badge>
              )}
            </TableCell>

            <ActionsButton todo={todo} />

            {/* <TableCell className="flex space-x-2 items-center">
              <Button variant="default" size="icon">
                <LucidePenLine size={16} />
              </Button>

              <Button
                // onClick={() => deleteTodo(todo.id)}
                onClick={() => deleteTodo(todo)}
                variant="destructive"
                size="icon"
              >
                {isLoading ? (
                  <FaSpinner size={16} />
                ) : (
                  <LucideTrash2 size={16} />
                )}
              </Button>
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="w-full">
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell colSpan={2} >
            {todoList.length == 0 ? "" : "there're no TOdo Yet"} 
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
