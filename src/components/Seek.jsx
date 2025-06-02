import CircularText from "./CircularText";
import Section from "./Section";

export default function Seek() {
  return (
    <Section
      headingText={
        <>
          What <span className="font-ephasis font-normal">I seek</span>
        </>
      }
      className="grid-cols-2"
      smallHeadingText="I love bold design solutions that not only tackle the problem, but add a little bit of beauty to our world. The beauty of crafting narratives is neither just a job or a hobby - It's simply something I love to do."
    ></Section>
  );
}
