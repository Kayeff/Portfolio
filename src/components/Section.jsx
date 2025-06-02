import Heading from "./Heading";
import SmallHeading from "./SmallHeading";

export default function Section({ headingText, smallHeadingText, children }) {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 gap-50 relative py-4">
      <div className="w-full flex flex-col gap-4">
        {headingText && <Heading title={headingText} />}
        <SmallHeading title={smallHeadingText} />
      </div>
      {children}
    </section>
  );
}
