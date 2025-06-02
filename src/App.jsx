import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollDown from "./components/ScrollDown";

export default function App() {
  return (
    <main className="min-h-screen w-full relative bg-[var(--background)] text-[var(--text)] transition-colors duration-500 antialiased">
      <Navbar />
      <ScrollDown />
      <div className="w-full px-10 flex flex-col gap-40">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
