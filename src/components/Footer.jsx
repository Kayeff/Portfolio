import { memo } from "react";

const Footer = memo(function Footer({ today }) {
  return (
    <footer className="w-full bg-[var(--text)] text-[var(--background)] flex items-center justify-between p-2">
      <div>
        <h1 className="text-2xl tracking-tight font-medium uppercase">
          Kaif's portfolio v1
        </h1>
      </div>
      <div>
        <h1 className="font-medium">{today.getFullYear()}</h1>
      </div>
    </footer>
  );
});

export default Footer;
