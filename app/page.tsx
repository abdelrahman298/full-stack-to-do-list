import AddTodoForm from "@/components/addTodoForm";

export default function Home() {
  // const findtodoData = await getAllTodoActions();
  // const form = useForm();

  const getFormItem = ({ field }) => {
    return (
      <FormItem>
        <FormLabel>title</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
        <FormMessage />
      </FormItem>
    );
  };

  return <AddTodoForm />;
}
