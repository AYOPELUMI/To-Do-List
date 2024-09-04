"use server";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
export const getData = async () => {
  const data = await db.select().from(todo);
  return data;
};
export const addTodo = async (id: number, title: string, task: string) => {
  await db.insert(todo).values({
    id: id,
    title: title,
    task: task,
  });
};
export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));
  revalidatePath("/");
};
export const toggleTodo = async (id: number) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));
  revalidatePath("/");
};
export const editTodoTask = async (id: number,task: string,) => {
  await db
    .update(todo)
    .set({
      task: task,
    })
    .where(eq(todo.id, id));
  revalidatePath("/");
};
export const editTodoTitle = async (id: number, title: string) => {
    await db
      .update(todo)
      .set({
        title: title
      })
      .where(eq(todo.id, id));
    revalidatePath("/");
  };