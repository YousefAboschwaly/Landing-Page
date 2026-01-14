import { NAV_LINKS } from "../../../data";

export default function Navbar() {
  return (
    <nav className="mt-4.25 h-10  px-10 flex items-center">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/Frame.svg" alt="Logo icon" />
        </a>

        {/* Navigation as */}
        <div className="hidden items-center md:flex ">
          <ul className="flex gap-7.5 px-7.5 items-center ">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="nav-link">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li className="nav-link border-l pl-7.5 border-white">
              <img src="/en.png" alt="English Language" />
            </li>

            <li className="nav-link">
              <a href="#">Sign In</a>
            </li>

            <li className="nav-link">
              <button className="  px-5.75 py-1.5 rounded-md tracking-[1px] border border-white cursor-pointer hover:bg-white hover:text-black transition">
                Try free
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
