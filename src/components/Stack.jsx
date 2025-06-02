import { motion } from "motion/react";

export default function Stack({ stack }) {
  return (
    <div className="w-full border border-[var(--text)]/15 rounded-lg flex justify-between flex-col gap-4 p-4 h-[50vh] group">
      <h1 className="tracking-tight text-4xl font-medium">{stack.title}</h1>
      <motion.img
        animate={{ rotate: stack.rotate ? "180deg" : "0" }}
        className="w-1/2 place-self-center object-cover grayscale group-hover:grayscale-0 duration-300"
        src={stack.image}
        loading="lazy"
        alt={`${stack.title}-image`}
      />
      <p className="tracking-tighter text-lg font-medium">
        {stack.description}
      </p>
    </div>
  );
}
