"use client";
import { createCamps } from "@/utils/actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="border" type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

const Form = () => {
  const [message, formAction] = useActionState(createCamps, null);
  return (
    <>
      {message && <h1>{message}</h1>}
      <form action={formAction}>
        <h1>Form</h1>
        <input
          placeholder="Camping Name"
          name="title"
          className="border"
          defaultValue="Korat Route 3060"
          type="text"
        />
        <input
          placeholder="location"
          name="location"
          className="border"
          defaultValue="Korat"
          type="text"
        />
        <SubmitButton />
      </form>
    </>
  );
};
export default Form;


