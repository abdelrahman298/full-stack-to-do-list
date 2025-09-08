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
import { createTodoActions } from "@/app/actions";
import { Checkbox } from "./ui/checkbox";
const AddTodoForm = () => {
  const form = useForm<TodoFormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
      completed: false,
    },
  });

  function onSubmit(values: TodoFormSchemaType) {
    createTodoActions({
      title: values.title,
      body: values.body,
      completed: values.completed,
    });
  }

  return (
    <div className="font-sans items-center justify-items-center pb-1 gap-16 sm:p-20">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button size={"lg"} variant="outline">
              Add New Note
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done .
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>title</FormLabel>
                          <FormControl>
                            <Input placeholder="shadcn" {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="body"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Body</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us a little bit about yourself"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            You can write your short description here.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="completed"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-row items-center gap-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                // checked={field.value}
                                // onCheckedChange={(checked) => {
                                //   return checked
                                //     ? field.onChange([
                                //         ...field.value,
                                //         item.id,
                                //       ])
                                //     : field.onChange(
                                //         field.value?.filter(
                                //           (value) => value !== item.id
                                //         )
                                //       );
                                // }}
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
    </div>
  );
};

export default AddTodoForm;
