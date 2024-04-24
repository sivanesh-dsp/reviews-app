"use client";
import React from "react";
import TextArea from "@/components/forms/TextArea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const formSchema = z.object({
  howCanWeImprove: z.string().min(2).max(200),
});

function YouTubeReview() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(formSchema) });

  const sendToFirebase = (data) => {
    console.log(data);
  };

  return (
    <main className="w-full mt-5 flex justify-center">
      <div className="w-[550px] bg-white m-3 p-5 rounded-[25px] shadow">
        <h4>Share your reviews</h4>
        <form
          action=""
          className="my-5"
          onSubmit={handleSubmit(sendToFirebase)}
        >
          <div>
            <label htmlFor="improve" className="block text-gray-600 mb-2">
              How we can improve?
            </label>
            <TextArea
              name="howCanWeImprove"
              register={register("howCanWeImprove")}
              error={errors.howCanWeImprove}
            />
          </div>
          <button className="px-4 py-2 mt-2 rounded bg-orange-400 text-white hover:bg-gray-300 hover:text-orange-800">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default YouTubeReview;
