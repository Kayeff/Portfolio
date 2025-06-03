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
      className="grid-cols-1"
      smallHeadingText="Every pixel, font, color, design is important for me. I have skills ranging from HTML to Redux JS to get the work done."
    >
      <div className="w-[70%] grid grid-cols-4 gap-2">
        {stack.map((stackItem, index) => (
          <Stack key={stackItem.id} index={index} stack={stackItem} />
        ))}
      </div>
    </Section>
  );
}
