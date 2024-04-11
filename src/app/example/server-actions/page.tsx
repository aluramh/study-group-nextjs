import clsx from "clsx";
import { NextApiResponse } from "next";

async function getTodoList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const items: any[] = await res.json();

  // Slim the response
  return items.slice(0, 10);
}

export default function Page() {
  async function createInvoice(formData: FormData) {
    "use server";

    const rawFormData = {
      customerId: formData.get("customerId"),
      amount: formData.get("amount"),
      status: formData.get("status"),
    };

    // mutate data
    // revalidate cache
  }

  return (
    <form action={createInvoice} className="flex flex-col align-baseline">
      <input name="name"></input>
      <input type="checkbox"></input>
      <button>Submit˝</button>
    </form>
  );
}
