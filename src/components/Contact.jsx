import { motion } from "framer-motion";
import ContactLink from "./ContactLink";
import Form from "./Form";

export default function Contact({ ref }) {
  return (
    <section
      ref={ref}
      id="contact"
      className="w-full bg-night text-rich-grey grid grid-cols-3 gap-2 border-t border-rich-grey"
    >
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
        className="w-full p-4 flex items-center justify-between flex-col border-r border-rich-grey"
      >
        <div className="w-full flex flex-col">
          <h1 className="uppercase tracking-tight font-medium text-4xl">
            Contact
          </h1>
          <p className="text-#1a1c23 laptop:text-base font-normal text-sm">
            Say <span className="text-light-gray">"Hello."</span> or drop me
            suggestions.
          </p>
        </div>
        <div className="w-full flex flex-col">
          <h1>or Follow me</h1>
          <div className="w-max flex flex-col">
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
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full col-span-2 text-4xl p-4"
      >
        <Form />
      </motion.div>
    </section>
  );
}
