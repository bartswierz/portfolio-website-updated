"use client";
import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import Toast_ from "../Toast";
import hasIntersected from "../../utils/hasIntersected";

//REFERENCE VIDEO FOR nodemailer setup: https://www.youtube.com/watch?v=6DAozN-qxr0
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [textareaFocus, setTextareaFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // For contact form display/remove
  const contactFormIntersectionRef = useRef<HTMLDivElement>(null);
  const contactFormHasIntersected = hasIntersected(contactFormIntersectionRef, 0.3);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailInputValidity, setEmailInputValidity] = useState<"success" | "failure" | "">("");
  const [nameInputValidity, setNameInputValidity] = useState<"success" | "failure" | "">("");

  // NAME INPUT VALIDATION AND HANDLING
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    let nameInput = e.target.value;
    setName(nameInput);
    const nameRegex = /^([a-zA-Z ]){2,30}$/; // Regex to allow only alphabetic characters and spaces

    if (nameRegex.test(nameInput)) {
      // VALID NAME
      setNameInputValidity("success"); //resets the input field color}
      setName(nameInput);
    } else {
      // VALIDITY CHECK FAILED OR EMPTY
      if (nameInput.length === 0) setNameInputValidity(""); //reset input field
      else if (nameInput.length >= 1) setNameInputValidity("failure"); //resets the input field color}
    }
  };

  // EMAIL INPUT VALIDATION AND HANDLING
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // IF VALID - SET SUCCESS COLOR AND
    if (emailRegex.test(emailInput)) {
      console.log("valid email: ", emailInput);
      setEmailInputValidity("success"); //Sets the input field color to GREEN
      setEmail(emailInput);
    } else {
      // FAILED VALIDATION CHECK OR EMPTY
      if (emailInput.length === 0) setEmailInputValidity("");
      else if (emailInput.length >= 1) setEmailInputValidity("failure"); //Sets the input field color to RED
    }
  };

  // SENDS EMAILS
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

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
      setEmailInputValidity("");
      setNameInputValidity("");
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
        ? "animate-fade-right animate-once animate-duration-[300ms] animate-ease-in transition-opacity opacity-100 duration-[500ms]"
        : "opacity-0"
    }`}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="text-white text-center text-2xl font-semibold">Contact Me</h2>
        <div className="flex flex-col justify-center items-center">
          {/* NAME INPUT */}
          <div className="max-w-md w-full min-h-[107px]">
            <div className="mb-2 block">
              <Label htmlFor="username3" value="Name (required)" className="font-semibold text-white" />
            </div>
            <TextInput
              icon={BsFillPersonFill}
              id="username3"
              placeholder="Michael Scott"
              color={nameInputValidity} // 'failure' | 'success' | ''
              onChange={(e) => handleNameChange(e)}
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
              value={name}
              helperText={
                //displays text IF input is invalid
                nameInputValidity === "failure" && (
                  <p>
                    <span className="font-medium">Must be at least 2 characters & no special characters</span>
                  </p>
                )
              }
              style={{
                borderRadius: "0.375rem",
                borderColor: "rgba(209, 213, 219, 1)",
                // margin: "2px none",
                borderWidth: "2px",
                transition: "background-color 200ms ease-in-out",
                backgroundColor: name.length > 0 || nameFocus ? "rgba(244, 244, 244, 1)" : "rgba(209, 213, 219, 1)",

                // Apply focus styles conditionally
                ...(name.length > 0 || nameFocus
                  ? {
                      backgroundColor: "rgba(244, 244, 244, 1)", //active color
                      borderColor: `#252839`, // Match Container Background Color
                      // boxShadow: "0 0 0 2px #ffb700", // Ring Color
                      boxShadow: "0 0 0 2px #fff", // Ring Color
                    }
                  : {}),
              }}
              required
            />
          </div>

          {/* EMAIL INPUT  */}
          <div className="max-w-md w-full min-h-[107px]">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Email (required)" className="font-semibold text-white" />
            </div>
            <TextInput
              icon={HiMail}
              id="email4"
              color={emailInputValidity} // 'failure' | 'success' | ''
              helperText={
                //displays text IF input is invalid
                emailInputValidity === "failure" && (
                  <p>
                    <span className="font-medium">Invalid Email - ex. name@gmail.com</span>
                  </p>
                )
              }
              value={email}
              placeholder="michaelscott@gmail.com"
              // type="email"
              type="email"
              onChange={(e) => handleEmailChange(e)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              style={{
                borderRadius: "0.375rem",
                borderColor: "rgba(209, 213, 219, 1)",
                borderWidth: "2px",
                transition: "background-color 200ms ease-in-out",
                backgroundColor: email.length > 0 || emailFocus ? "rgba(244, 244, 244, 1)" : "rgba(209, 213, 219, 1)",

                // Apply focus styles conditionally
                ...(email.length > 0 || emailFocus
                  ? {
                      backgroundColor: "rgba(244, 244, 244, 1)", //active color
                      borderColor: `#252839`, // Match Container Background Color
                      // boxShadow: "0 0 0 2px #ffb700", // Ring Color
                      boxShadow: "0 0 0 2px #fff", // Ring Color
                    }
                  : {}),
              }}
              required
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
              value={message}
              rows={4}
              color={""}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setTextareaFocus(true)}
              onBlur={() => setTextareaFocus(false)}
              className={`min-h-[70px] rounded-lg border-gray-300 border-[2px] transition-colors duration-200 ease-in-out
              ${message.length > 0 || textareaFocus ? "bg-gray-50 focus:ring-2 focus:ring-white focus:border-focus" : "bg-gray-300"}
              `}
              required
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
