import { LucidePenLine, LucideTrash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { TableCell } from "./ui/table";
import { deleteTodoActions } from "@/app/actions";
import { FaSpinner } from "react-icons/fa";
import AddTodoForm from "./addTodoForm";

const ActionsButton = ({ todo }) => {
  const [isLoading, setIsLoading] = useState(false);

  const openEditForm = () => {};

  const deleteTodo = async () => {
    setIsLoading(true);
    try {
      await deleteTodoActions(todo.id);
      console.log("Todo deleted successfully");
    } catch (error) {
      // Handle specific error types if needed
      alert("Failed to delete todo. Please try again.");
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
        <AddTodoForm modeToggleForm="Edit" todoEdit={todo}>
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
