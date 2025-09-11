import AddTodoForm from "@/components/addTodoForm";
import { TodoTable } from "@/components/todoTable";
import { getAllTodoActions } from "./actions";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const todoData = await getAllTodoActions();

  // console.log("from home " + JSON.stringify(todoData));

  return (
    <>
      <div className="container mx-auto px-40">
        <div className="font-sans items-center justify-items-center pb-1 gap-16 sm:p-20">
          <AddTodoForm modeToggleForm="Add">
            <Button size={"lg"} variant="outline">
              Add New Note
            </Button>
          </AddTodoForm>
        </div>
        <TodoTable todoList={todoData} />
      </div>
    </>
  );
}
