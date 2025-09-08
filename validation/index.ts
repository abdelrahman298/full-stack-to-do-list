import z from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "title must be at least 2 characters.",
    })
    .max(30, { message: "title must be at most 30 characters." }),
  body: z
    .string()
    .max(30, {
      message: "",
    })
    .optional(),
  completed: z.boolean().optional(),
});

export type TodoFormSchemaType = z.infer<typeof formSchema>;
