import { Link } from "react-router-dom";
import SmallHeading from "../components/SmallHeading";
import { RiArrowRightLongLine } from "@remixicon/react";

export default function ErrorPage() {
  return (
    <main className="w-full bg-night text-white min-h-screen flex items-center justify-center flex-col font-inter error-bg">
      <div className="w-1/2 p-10 bg-night/40 flex items-center justify-center flex-col gap-5 backdrop-blur-xs">
        <div className="flex items-center justify-center flex-col gap-2">
          <p className="tracking-tight text-3xl font-medium">Page not found.</p>
          <p className="w-[50%] tracking-tighter text-center text-[1.3rem] leading-[1.6rem] text-white/80">
            You seem to have reached a page that doesn't exist or may never
            exist. Turn back now, traveler.
          </p>
        </div>
        <Link
          to=""
          className="px-5 py-3 bg-white text-night tracking-tighter rounded-full flex gap-2 hover:bg-white/20 hover:text-white duration-300"
        >
          <span>Go Home</span>
          <span>
            <RiArrowRightLongLine />
          </span>
        </Link>
      </div>
    </main>
  );
}
