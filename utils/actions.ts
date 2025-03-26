"use server";

// import { redirect } from "next/navigation";

interface FormData {
  get(name: string): string | null;
}

export const createCamps = async (prevState: unknown, formData: FormData) => {
  await new Promise((resolve) => setInterval(resolve, 1000));
  // const title = formData.get('title');
  // const location = formData.get('location');
  const rawData = Object.fromEntries(formData);
  console.log(rawData);
  // revalidatePath('/camp')
    // redirect("/");
  return "create camp successfully";
};

export const fetchCamp = async () => {
  const camps = [
    { id: 1, title: "Cat" },
    { id: 2, title: "Dog" },
    { id: 3, title: "Rabbit" },
  ];
  return camps;
};
