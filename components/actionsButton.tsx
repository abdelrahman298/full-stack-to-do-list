import { LucidePenLine, LucideTrash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { TableCell } from "./ui/table";
import { deleteTodoActions } from "@/app/actions";
import { FaSpinner } from "react-icons/fa";
import AddTodoForm from "./addTodoForm";
import { ITodo } from "@/interfaces";

const ActionsButton = ( {todo}:{todo:ITodo}) => {
  const [isLoading, setIsLoading] = useState(false);
  // console.log("from actions button " + JSON.stringify(todo));
  

  const deleteTodo = async () => {
    setIsLoading(true);
    try {
      await deleteTodoActions(todo.id as string);
      console.log("Todo deleted successfully");
    } catch (error) {
      // Handle specific error types if needed
      alert(`Failed to delete todo. Please try again.${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TableCell className="flex space-x-2 items-center">
      {/* <Button variant="default" size="icon">
        <LucidePenLine size={16} />
      </Button> */}

      <div className="inline font-sans items-center justify-items-center">
        {/* <AddTodoForm modeToggleForm="Edit" todoEdit={todo}> */}
          {/* <AddTodoForm
          modeToggleForm="Edit"
          todoEdit={
            todo.id
              ? { ...todo, id: todo.id as string }
              : undefined
          }
        /> */}
        <AddTodoForm modeToggleForm="Edit"  todoEdit={
            todo.id
              ? {
                  ...todo,
                  id: todo.id as string,
                  body: todo.body === null ? undefined : todo.body,
                  completed: todo.completed === null ? undefined : todo.completed,
                }
              : undefined
          }>
          <Button variant="default" size="icon">
            <LucidePenLine size={16} />
          </Button>
        </AddTodoForm>
      </div>
      {/* <AddTodoForm modeToggleForm="Edit">
        <Button variant="default" size="icon">
          <LucidePenLine size={16} />
        </Button>
      </AddTodoForm> */}
      <Button
        // onClick={() => deleteTodo(todo.id)}
        onClick={deleteTodo}
        variant="destructive"
        size="icon"
      >
        {isLoading ? <FaSpinner size={16} /> : <LucideTrash2 size={16} />}
      </Button>
    </TableCell>
  );
};

export default ActionsButton;
