import { memo } from "react";

const Footer = memo(function Footer({ today }) {
  return (
    <footer className="w-full bg-rich-grey text-night flex items-center justify-between p-2">
      <div>
        <h1 className="text-2xl tracking-tighter font-medium uppercase">
          Kaif Saiyed
        </h1>
      </div>
      <div>
        <h1 className="font-medium">{today.getFullYear()}</h1>
      </div>
    </footer>
  );
});

export default Footer;
