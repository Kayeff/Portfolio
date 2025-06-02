import { stack } from "../stack";
import Section from "./Section";
import Stack from "./Stack";

export default function About() {
  return (
    <Section
      headingText={
        <>
          My <span className="font-ephasis font-normal">Skills</span>
        </>
      }
      smallHeadingText="Every pixel, font, color, design is important for me. I have skills ranging from HTML to Redux JS to get the work done."
    >
      <div className="w-full grid grid-cols-6 gap-2">
        {stack.map((stackItem) => (
          <Stack key={stackItem.stackTitle} stack={stackItem} />
        ))}
      </div>
    </Section>
  );
}
