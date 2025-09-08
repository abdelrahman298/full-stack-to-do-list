import AddTodoForm from "@/components/addTodoForm";
import { TodoTable } from "@/components/todoTable";
import { getAllTodoActions } from "./actions";

export default async function Home() {
  const todoData = await getAllTodoActions();

  console.log("from home " + JSON.stringify(todoData));

  return (
    <>
      <div className="container mx-auto px-40">
        <AddTodoForm />
        <TodoTable todoList={todoData} />
      </div>
    </>
  );
}
