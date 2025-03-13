import react from "../assets/react.svg";
import motion from "../assets/framer-motion.svg";
import js from "../assets/javascript.svg";
import tailwind from "../assets/tailwind-css.svg";

const stack = [
  { stackName: "Javascript", stackIcon: js },
  { stackName: "React JS", stackIcon: react },
  { stackName: "Framer Motion", stackIcon: motion },
  { stackName: "Tailwind CSS", stackIcon: tailwind },
];

export default function About() {
  return (
    <section className="w-full min-h-screen grid grid-cols-2 bg-night text-rich-grey">
      <div></div>
      <div className="w-full flex items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-10 ">
          <div className="me h-96 border border-rich-grey"></div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-medium uppercase">About me</h1>
              <p className="laptop:text-lg tracking-normal text-sm">
                Hey fellas! Kaif here. I'm Frontend developer who is driven by
                love for crafting clean, minimalistic web experiences focusing
                on functionality. Whether it's designing sleek layouts or
                writing clean code, I'm driven by the pursuit of impactful
                design that speaks volumes through subtlety .When I'm not coding
                or learning, you'll find me working out in the gym, pushing
                myself to new limits both physically and mentally.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-medium uppercase">Tech Stack</h1>
              <ul className="grid grid-cols-2 gap-2 text-lg">
                {stack.map((item, index) => (
                  <li
                    className="flex items-center justify-start gap-2"
                    key={index}
                  >
                    <h1>{item.stackName}</h1>
                    <img className="h-5" src={item.stackIcon} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
