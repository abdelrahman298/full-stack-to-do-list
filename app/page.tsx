import AddTodoForm from "@/components/addTodoForm";
import { TodoTable } from "@/components/todoTable";
import { getAllUserTodoActions } from "./actions";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const todoData = await getAllUserTodoActions(userId);
  console.log("todoData ==> " +JSON.stringify( todoData));
  return (
    <>
      <div className="container mx-auto px-40">
        <div className="font-sans items-center justify-items-center pb-1 gap-16 sm:p-20">
          <AddTodoForm modeToggleForm="Add" userId={userId}>
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
