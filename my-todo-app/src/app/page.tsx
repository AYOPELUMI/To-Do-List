import Todos from "@/components/todos";
import { getData } from "../actions/todoAction";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}