import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollDown from "./components/ScrollDown";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <SmoothScroll>
      <main className="min-h-screen w-full relative bg-[var(--background)] text-[var(--text)] transition-colors duration-300 antialiased">
        <Navbar />
        <ScrollDown />
        <div className="w-full px-10 flex flex-col gap-40">
          <Outlet />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
