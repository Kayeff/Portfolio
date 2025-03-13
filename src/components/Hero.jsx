import { motion } from "framer-motion";
import { formatDate, getDay, getMonthName } from "../date";
import Heading from "./Heading";
import SmallHeading from "./SmallHeading";

export default function Hero() {
  const today = new Date();

  return (
    <section className="w-full h-[calc(100vh-70px)] relative space-y-2 bg-night text-rich-grey border-b border-rich-grey">
      <div className="w-full px-4 py-20">
        <Heading title={"front-end"} />
        <div className="indent-96 overflow-hidden w-max">
          <Heading delay={0.2} title={"developer"} />
          <SmallHeading title={"based in gujarat, india"} />
        </div>
      </div>
      <div className="p-4 flex items-center justify-between absolute bottom-0 w-full z-30">
        <div className="laptop:w-max flex items-center justify-center space-x-2 max-tablet:flex-col max-tablet:items-start max-tablet:space-x-0">
          <SmallHeading title={formatDate(today.getDate())} />
          <SmallHeading title={getMonthName(today.getMonth())} />
        </div>
        <SmallHeading title={today.getFullYear()} />
        <SmallHeading title={getDay(today.getDay())} />
      </div>
    </section>
  );
}
