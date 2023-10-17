"use client";
import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import Toast_ from "./Toast";
import hasIntersected from "../utils/hasIntersected";

//REFERENCE VIDEO FOR nodemailer setup: https://www.youtube.com/watch?v=6DAozN-qxr0
const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  // For contact form display/remove
  // const contactFormIntersectionRef = useRef<HTMLDivElement>(null);
  // const isVisible = useIsIntersecting(contactFormIntersectionRef, 0.3);
  const contactFormIntersectionRef = useRef<HTMLDivElement>(null);
  const contactFormHasIntersected = hasIntersected(contactFormIntersectionRef, 0.3);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailInputStatus, setEmailInputStatus] = useState<"success" | "failure" | "">("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailInput = e.target.value;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // IF VALID - SET SUCCESS COLOR AND
    if (emailRegex.test(emailInput)) {
      console.log("valid email: ", emailInput);
      setEmailInputStatus("success");
      // Valid email format
      setEmail(emailInput);
    } else {
      // Invalid email format
      console.log("invalid email: ", emailInput);
      // email input is 0 - no text
      // atleast 1 character - invalid email
      if (emailInput.length === 0) setEmailInputStatus("");
      else if (emailInput.length >= 1) setEmailInputStatus("failure");
      // if (emailInput.length === 0) setIsEmailInputValid(false);
      // emailInput.length >= 1 && setIsEmailInputValid(false);
      // You can handle this case, e.g., show an error message
      // TODO - set our color image to an error color and show helper text under it
    }
    // setEmail(e.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    // const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    // console.log("user submitted form");
    // console.log("data: ", { name, email, message });

    const data = {
      name: name,
      email: email,
      message: message,
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

      //RESETS THE FORM
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
    <div
      ref={contactFormIntersectionRef}
      className={`border-[3px] border-white max-w-[550px] w-full bg-primary p-4 rounded-lg my-8 mx-4
    ${
      contactFormHasIntersected
        ? "animate-jump-in animate-once animate-duration-[500ms] animate-delay-300 animate-ease-in transition-opacity opacity-100 duration-[500ms]"
        : "opacity-0"
    }`}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="text-white text-center text-2xl font-semibold">Contact Me</h2>
        <div className="flex flex-col justify-center items-center">
          {/* NAME INPUT */}
          <div className="max-w-md w-full min-h-[107px]">
            <div className="mb-2 block">
              <Label htmlFor="username3" value="Name*" className="font-semibold text-white" />
            </div>
            <TextInput
              icon={BsFillPersonFill}
              id="username3"
              placeholder="Michael Scott"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              // className="border-b-2 border-[#fff] rounded-lg focus:outline-none focus:border-[#ffb700]"
            />
          </div>

          {/* EMAIL INPUT  */}
          <div className="max-w-md w-full min-h-[107px]">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Email*" className="font-semibold text-white" />
            </div>
            <TextInput
              icon={HiMail}
              id="email4"
              color={emailInputStatus} // 'failure' | 'success' | ''
              helperText={
                emailInputStatus === "failure" && (
                  <p>
                    <span className="font-medium">Invalid Email</span>
                  </p>
                )
              }
              placeholder="michaelscott@gmail.com"
              required
              type="email"
              // onChange={(e) => setEmail(e.target.value)}
              onChange={(e) => handleEmailChange(e)}
              value={email}
              // className="border-b-2 border-[#fff] rounded-lg focus:outline-none focus:border-[#ffb700]"
            />
          </div>

          {/* TEXT AREA INPUT  */}
          <div className="max-w-md w-full mb-2" id="textarea">
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
              className="min-h-[70px] border-b-2 border-[#fff] rounded-lg focus:outline-none focus:border-[#ffb700]"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-center items-center mt-4 mb-3">
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
    </div>
  );
};

export default ContactForm;
