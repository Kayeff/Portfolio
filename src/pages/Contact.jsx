import SmallHeading from "../components/SmallHeading";
import contact from "/contact.webp";

export default function Contact() {
  return (
    <main className="w-full h-[calc(100vh-76px)] grid grid-cols-2 gap-5 relative">
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <div>
          <SmallHeading title="Get in Touch or just say Hii !" />
        </div>
        <div className="w-full flex items-center justify-end">
          <a href="" className="font-ephasis text-5xl tracking-tight">
            kaifsaiyed896@gmail.com
          </a>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <img
          className="h-96 object-cover"
          src={contact}
          alt="contact"
          loading="lazy"
        />
      </div>
    </main>
  );
}
