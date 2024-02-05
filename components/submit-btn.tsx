import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useForm, useFormState, SubmitHandler } from "react-hook-form";

interface FormData {
  // Define your form data types here
  senderEmail: string;
  message: string;
}

export default function SubmitBtn() {
  const { control } = useForm<FormData>();
  const { isSubmitting } = useFormState({ control });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    // Your form submission logic here
    console.log(formData);
  };

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={isSubmitting}
      onClick={() => onSubmit({ senderEmail: "example@gmail.com", message: "Hello" })}
      // Note: Replace the above line with actual form submission logic
    >
      {isSubmitting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
