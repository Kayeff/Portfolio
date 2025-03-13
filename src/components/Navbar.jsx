const links = [
  { id: 1, title: "Projects", href: "#" },
  { id: 2, title: "About", href: "#" },
  { id: 3, title: "Contact", href: "#" },
];

function NavbarLinks({ href, title }) {
  return (
    <li>
      <a
        href={href}
        className="link laptop:text-lg flex items-center justify-center transition-all relative hover:text-light-gray text-lg font-normal"
      >
        {title}
      </a>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-6 sticky z-40 top-0 left-0 bg-night border-b border-rich-grey/20">
      <a href="#">
        <h1 className="text-xl tracking-tight text-rich-grey laptop:text-2xl">
          Kaif Saiyed
        </h1>
      </a>
      <div className="tablet++:hidden">
        <a href="#">
          <i className="ri-menu-3-line text-xl text-#EEF2E3"></i>
        </a>
      </div>
      <ul className="max-tablet++:hidden flex items-center justify-center space-x-6">
        {links.map((link) => (
          <NavbarLinks
            title={link.title}
            key={`nav-link-${link.id}`}
            href={link.href}
          />
        ))}
      </ul>
    </nav>
  );
}
