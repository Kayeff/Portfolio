import { twMerge } from "tailwind-merge";
import Heading from "./Heading";
import SmallHeading from "./SmallHeading";
import { memo } from "react";

const Section = memo(function Section({
  ref,
  headingText,
  smallHeadingText,
  children,
  className,
}) {
  return (
    <section
      ref={ref}
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
});

export default Section;
