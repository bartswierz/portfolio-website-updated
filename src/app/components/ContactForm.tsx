"use client";
import { useState, useEffect, FormEvent } from "react";
import { Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import Toast_ from "./Toast";
//REFERENCE VIDEO FOR nodemailer setup: https://www.youtube.com/watch?v=6DAozN-qxr0
const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  // emailjs.init(process.env.publicKey);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // console.log("name: ", name);
  // console.log("email: ", email);
  // console.log("message: ", message);

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   // console.log("user submitted form");
  //   // console.log("data: ", { name, email, message });

  //   // Passing our form data to our api route
  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         message,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   } catch (err: any) {
  //     console.error("Err", err);
  //   }
  // };

  // const handleSubmit = async (e: FormEvent) => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    // console.log("user submitted form");
    // console.log("data: ", { name, email, message });

    const data = {
      name: name,
      email: email,
      message: message,
      // name: String(event.target.name.value),
      // email: String(event.target.email.value),
      // message: String(event.target.message.value),
    };

    console.log("data: ", data);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);

      //reset the form
      setName("");
      setEmail("");
      setMessage("");
      // <Toast_ />;
    }

    if (!response.ok) {
      const error = await response.json();

      if (error.message) {
        // TODO - add a toast
        // Toast(error message)
        // <Toast_ />;
      }
      console.log("Error sending message");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-[3px] border-white max-w-[550px] w-full bg-primary p-4 rounded-lg my-8 min-h-[410px]"
    >
      <h2 className="text-white text-center text-2xl font-semibold">Contact Me</h2>
      <div className="flex flex-col justify-center items-center gap-2">
        {/* NAME INPUT */}
        <div className="max-w-md w-full">
          <div className="mb-2 block">
            <Label htmlFor="username3" value="Name*" className="font-semibold text-white" />
          </div>
          <TextInput
            icon={BsFillPersonFill}
            id="username3"
            placeholder="Michael Scott"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        {/* EMAIL INPUT  */}
        <div className="max-w-md w-full">
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Email*" className="font-semibold text-white" />
          </div>
          <TextInput
            icon={HiMail}
            id="email4"
            placeholder="michaelscott@gmail.com"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* TEXT AREA INPUT  */}
        <div className="max-w-md w-full my-2 " id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Leave a message (optional)" className="font-semibold text-white" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="min-h-[70px]"
          />
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <div className="flex justify-center items-center mt-4">
        <button
          type="submit"
          // When its loading, we will make the button gray and disable it
          disabled={loading}
          className="text-dark w-[80%] py-2 bg-transparent rounded-full border-2 border-primary font-semibold hover:bg-hover hover:text-hover transition-all duration-300 ease-in-out disabled:bg-gray-400 disabled:text-gray-100"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
