"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formSchema, TodoFormSchemaType } from "@/validation";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { createTodoActions, updateTodoActions } from "@/app/actions";
import { Checkbox } from "./ui/checkbox";
import { ReactNode, useState } from "react";
interface IProps {
  modeToggleForm: string;
  children: ReactNode;
  todoEdit?: {
    title: string;
    body: string | undefined;
    completed: boolean | undefined;
  };
  userId?: string | null
}

const AddTodoForm = ({ modeToggleForm, children, todoEdit, userId }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<TodoFormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: modeToggleForm === "Edit" && todoEdit ? todoEdit.title : "",
      body: modeToggleForm === "Edit" && todoEdit ? todoEdit.body : "",
      completed:
        modeToggleForm === "Edit" && todoEdit ? todoEdit.completed : false,
    },
  });

  function onSubmitAddTodo(values: TodoFormSchemaType) {
    createTodoActions({
      title: values.title,
      body: values.body,
      completed: values.completed,
      userId: userId as string 
    });
    form.reset();
    setIsOpen(false);
  }

  function onSubmitEditTodo(values: TodoFormSchemaType) {
    updateTodoActions({
      id: todoEdit?.id,
      title: values.title,
      body: values.body,
      completed: values.completed,
    });

    setIsOpen(false);
    console.log("edit todo" + JSON.stringify(todoEdit));
    console.log("edit todo to update" + JSON.stringify(values));
  }

  return (
    // <div className="font-sans items-center justify-items-center pb-1 gap-16 sm:p-20">
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger asChild>
          {/* <Button size={"lg"} variant="outline">
              Add New Note
            </Button> */}
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {modeToggleForm == "Add" ? "Add New Todo" : "Edit  Todo"}
            </DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done .
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Form {...form}>
                <form
                  onSubmit={
                    modeToggleForm == "Add"
                      ? form.handleSubmit(onSubmitAddTodo)
                      : form.handleSubmit(onSubmitEditTodo)
                  }
                  className="space-y-8"
                >
                  {/* //! Title  */}
                  <FormField
                    control={
                      form.control
                      // modeToggleForm == "Add" ? form.control : editForm.control
                    }
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              modeToggleForm == "Edit" && todoEdit
                                ? todoEdit.title
                                : "write your title here"
                            }
                            {...field}
                            value={
                              // modeToggleForm == "Edit" && todoEdit
                              //   ? todoEdit.title
                              //   : field.value
                              field.value
                            }
                          />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* //! Body  */}
                  <FormField
                    control={
                      form.control
                      // modeToggleForm == "Add" ? form.control : editForm.control
                    }
                    name="body"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Body</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={
                              modeToggleForm == "Edit" && todoEdit
                                ? todoEdit.title
                                : "Tell us a little bit about yourself"
                            }
                            className="resize-none"
                            {...field}
                            value={
                              // modeToggleForm == "Edit" && todoEdit
                              //   ? todoEdit.title
                              //   : field.value
                              field.value
                            }
                          />
                        </FormControl>
                        <FormDescription>
                          You can write your short description here.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* //! Completed  */}
                  <FormField
                    control={
                      form.control
                      // modeToggleForm == "Add" ? form.control : editForm.control
                    }
                    name="completed"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-row items-center gap-2">
                          <FormControl>
                            <Checkbox
                              // checked={field.value}
                              checked={
                                //   Boolean(
                                //   modeToggleForm === "Edit" && todoEdit
                                //     ? todoEdit.completed // or whatever property indicates if it's checked
                                //     : field.value
                                // )
                                field.value
                              }
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            Completed
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />

                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
    // </div>
  );
};

export default AddTodoForm;
