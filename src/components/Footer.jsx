import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--background)] text-[var(--text)] flex items-center justify-between p-10">
      <div className="w-full grid grid-cols-4 p-2">
        <div className="w-full">
          <Link
            to=""
            className="overflow-y-hidden py-1.5 pr-1.5 cursor-pointer"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-xl tracking-tighter laptop:text-4xl font-ephasis"
            >
              Kaif Saiyed
            </motion.h1>
          </Link>
        </div>
        <div className="w-full flex flex-col gap-2">
          <a className="w-max tracking-tight text-xl hover:underline" href="">
            Instagram
          </a>
          <a className="w-max tracking-tight text-xl hover:underline" href="">
            LinkedIn
          </a>
          <a className="w-max tracking-tight text-xl hover:underline" href="">
            Github
          </a>
          <a className="w-max tracking-tight text-xl hover:underline" href="">
            Twitter
          </a>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h1 className="tracking-tighter text-4xl font-medium">
            Let's connect
          </h1>
          <p>
            <a href="" className="tracking-tight text-lg">
              kaifsaiyed896@gmail.com
            </a>
          </p>
        </div>
        <div className="w-full"></div>
      </div>
    </footer>
  );
}
