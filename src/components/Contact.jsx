import { motion } from "framer-motion";
import ContactLink from "./ContactLink";
import Form from "./Form";

export default function Contact() {
  return (
    <section className="w-full bg-night text-rich-grey grid grid-cols-3 gap-2 border-t border-rich-grey">
      <div className="w-full p-4 flex items-center justify-between flex-col border-r border-rich-grey">
        <div className="w-full flex flex-col">
          <motion.h1
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
            className="uppercase tracking-tight font-medium text-4xl"
          >
            Contact
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
            className="text-#1a1c23 laptop:text-base font-normal text-sm"
          >
            Say <span className="text-light-gray">"Hello."</span> or drop me
            suggestions.
          </motion.p>
        </div>
        <div className="w-full flex flex-col">
          <motion.h1
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
          >
            or Follow me
          </motion.h1>
          <div className="w-full grid-cols-2 grid">
            <ContactLink href="https://github.com/Kayeff" title="github" />
            <ContactLink
              href="https://www.instagram.com/kayfsaiyed/"
              title="instagram"
            />
            <ContactLink href="https://x.com/dombkodr" title="twitter" />
            <ContactLink
              href="https://www.linkedin.com/in/kaif-saiyed-452b851b6/"
              title="linkedin"
            />
          </div>
        </div>
      </div>
      <div className="w-full col-span-2 text-4xl p-4">
        <Form />
      </div>
    </section>
  );
}
