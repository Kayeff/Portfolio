import { motion } from "framer-motion";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    userName: "",
    userCause: "",
  });

  return (
    <motion.form
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: true }}
      action=""
      className="flex flex-col gap-6"
    >
      <div>
        <span>
          Hi, Kaif. My name is{" "}
          <input
            type="text"
            placeholder="your name."
            className="outline-none"
          />
          <p>
            My mail is{" "}
            <input
              type="email"
              placeholder="your email."
              className="outline-none"
            />
          </p>
          <p className="flex items-start gap-2">
            I have to say{" "}
            <textarea
              type="text"
              placeholder="your message."
              className="outline-none w-[70%] resize-none"
            />
          </p>
          <p>
            Cheers,{" "}
            <input
              type="text"
              placeholder="your name."
              className="outline-none"
            />
          </p>
        </span>
      </div>
      <div className="w-full">
        <button className="w-full bg-rich-grey py-3 px-4 rounded-full text-night tracking-tighter flex items-center justify-between hover:bg-transparent hover:border-rich-grey border border-transparent hover:text-rich-grey cursor-pointer duration-300">
          <span className="">Send</span>
          <svg
            width="5%"
            height="100%"
            viewBox="0 0 35 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25 0.726562L35 6.50007L25 12.2736V7.50007H0V5.50007H25V0.726562Z"
              fill="CurrentColor"
            ></path>
          </svg>
        </button>
      </div>
    </motion.form>
  );
}
