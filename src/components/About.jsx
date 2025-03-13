import react from "../assets/react.svg";
import framerMotion from "../assets/framer-motion.svg";
import js from "../assets/javascript.svg";
import tailwind from "../assets/tailwind-css.svg";
import SmallHeading from "./SmallHeading";

const stack = [
  { stackName: "Javascript", stackIcon: js },
  { stackName: "Tailwind CSS", stackIcon: tailwind },
  { stackName: "React JS", stackIcon: react },
  { stackName: "Framer Motion", stackIcon: framerMotion },
];

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full min-h-screen grid grid-cols-2 bg-night text-rich-grey">
      <div></div>
      <div className="w-full flex items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-10 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="me h-96 w-72 border border-rich-grey justify-self-end"
          ></motion.div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center justify-start">
                <SmallHeading title={"About me"} />
              </div>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
                className="laptop:text-lg tracking-normal text-sm"
              >
                Hey fellas! Kaif here. I'm Frontend developer who is driven by
                love for crafting clean, minimalistic web experiences focusing
                on functionality. Whether it's designing sleek layouts or
                writing clean code, I'm driven by the pursuit of impactful
                design that speaks volumes through subtlety .When I'm not coding
                or learning, you'll find me working out in the gym, pushing
                myself to new limits both physically and mentally.
              </motion.p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <motion.h1
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                className="font-medium text-lg"
              >
                Tech Stack:{" "}
              </motion.h1>
              <ul className="flex gap-3 text-lg">
                {stack.map((item, index) => (
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: index * 0.1,
                    }}
                    className="flex items-center justify-start"
                    key={index}
                  >
                    <img className="h-5" src={item.stackIcon} alt="" />
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
