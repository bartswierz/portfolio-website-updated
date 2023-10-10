"use client";
import { useState, useEffect } from "react";
import { Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("user submitted form");
  };
  return (
    <form onSubmit={handleSubmit} className="border-[3px] border-white max-w-[550px] w-full bg-primary p-4 rounded-lg my-8 ">
      <h2 className="text-white text-center text-2xl font-semibold">Contact Me</h2>
      <div className="flex flex-col justify-center items-center gap-2">
        {/* NAME */}
        <div className="max-w-md w-full">
          <div className="mb-2 block">
            <Label htmlFor="username3" value="Name*" className="font-semibold text-white" />
          </div>
          <TextInput icon={BsFillPersonFill} id="username3" placeholder="Michael Scott" required />
        </div>

        {/* EMAIL */}
        <div className="max-w-md w-full">
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Email*" className="font-semibold text-white" />
          </div>
          <TextInput icon={HiMail} id="email4" placeholder="michaelscott@gmail.com" required type="email" />
        </div>

        {/* TEXT AREA */}
        <div className="max-w-md w-full my-2" id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Leave a message (optional)" className="font-semibold text-white" />
          </div>
          <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <button
          type="submit"
          className="text-dark w-[80%] py-2 bg-transparent rounded-full border-2 border-primary font-semibold hover:bg-hover hover:text-hover transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
