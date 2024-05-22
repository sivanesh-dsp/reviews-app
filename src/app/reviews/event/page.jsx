"use client";
import React from "react";
import TextArea from "@/components/forms/TextArea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import ReactStars from "react-rating-stars-component";
import Label from "@/components/forms/Label";
import FormInput from "@/components/forms/FormInput";
import Navbar from "@/components/Navbar";
import RootLayout from "../layout";

const formSchema = z.object({
  howCanWeImprove: z.string().min(2).max(200),
  contentQuality: z.string().min(3).max(200),
  yourName: z.string().min(2).max(200),
  eventName: z.string().min(2).max(200),
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
    <RootLayout>
      <Navbar appTitle={"Event"} />
      <main className="w-full my-5 flex justify-center">
        <div className="w-[550px] bg-white m-3 p-5 rounded-[25px] shadow">
          <h4>Share your reviews</h4>
          <form
            action=""
            className="my-5 space-y-4"
            onSubmit={handleSubmit(sendToFirebase)}
          >
            <div>
              <FormInput
                label="Enter Your Name"
                name="yourName"
                register={register("yourName")}
                error={errors.yourName}
                placeholder="Name"
                required
              />
            </div>
            <div>
              <FormInput
                label="Enter Event Name"
                name="eventName"
                register={register("eventName")}
                error={errors.eventName}
                placeholder="Event Name"
                required
              />
            </div>
            <div>
              <TextArea
                label="What do you think about the content?"
                name="contentQuality"
                register={register("contentQuality")}
                error={errors.contentQuality}
                placeholder="Enter briefly"
                required
              />
            </div>
            <div>
              <TextArea
                label="How can we improve?"
                name="howCanWeImprove"
                register={register("howCanWeImprove")}
                error={errors.howCanWeImprove}
                required
              />
            </div>
            <div>
              <Label id="Overall Ratings" text="Overall Ratings (?/5)" required>
                <ReactStars
                  count={5}
                  // register={register(sendToFirebase)}
                  size={50}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </Label>
            </div>
            <button className="px-4 py-2 mt-2 rounded bg-orange-400 text-white hover:bg-gray-300 hover:text-orange-800">
              Submit
            </button>
          </form>
        </div>
      </main>
    </RootLayout>
  );
}

export default YouTubeReview;
