import { memo } from "react";
import { formatDate, getDay, getMonthName } from "../date";
import Heading from "./Heading";
import SmallHeading from "./SmallHeading";

const Hero = memo(function Hero({ today }) {
  return (
    <section className="w-full h-[calc(100vh-70px)] relative gap-2">
      <div className="w-full flex flex-col px-4 py-20">
        <Heading title={"front-end"} />
        <div className="indent-96 overflow-hidden w-max">
          <Heading delay={0.2} title={"developer"} />
          <SmallHeading delay={0.3} title={"based in gujarat, india"} />
        </div>
      </div>
      <div className="p-4 flex items-center justify-between absolute bottom-0 w-full z-30">
        <div className="laptop:w-max flex items-center justify-center gap-2 max-tablet:flex-col max-tablet:items-start max-tablet:gap-0">
          <SmallHeading delay={0.3} title={formatDate(today.getDate())} />
          <SmallHeading delay={0.3} title={getMonthName(today.getMonth())} />
        </div>
        <SmallHeading delay={0.3} title={today.getFullYear()} />
        <SmallHeading delay={0.3} title={getDay(today.getDay())} />
      </div>
    </section>
  );
});

export default Hero;
