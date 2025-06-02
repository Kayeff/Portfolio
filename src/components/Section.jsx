import { twMerge } from "tailwind-merge";
import Heading from "./Heading";
import SmallHeading from "./SmallHeading";

export default function Section({
  headingText,
  smallHeadingText,
  children,
  className,
}) {
  return (
    <section
      className={twMerge(
        "w-full min-h-screen grid gap-50 relative py-4",
        className
      )}
    >
      <div className="w-full flex flex-col gap-4">
        {headingText && <Heading title={headingText} />}
        <SmallHeading title={smallHeadingText} />
      </div>
      {children}
    </section>
  );
}
