
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const column1Links = [
    { label: "Home", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "All Apps", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Setapp for Teams", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Podcast", href: "#" },
    { label: "Download", href: "#" },
  ];

  const column2Links = [
    { label: "About", href: "#" },
    { label: "Support", href: "#" },
    { label: "Education Discount", href: "#" },
    { label: "Family Plan", href: "#" },
    { label: "For Developers", href: "#" },
    { label: "Gift Cards", href: "#" },
    { label: "Redeem Card or Code", href: "#" },
    { label: "Setapp Reviews", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Mac Developer Survey 2023", href: "#" },
  ];

  const column3Links = [
    { label: "Getting started with Setapp", href: "#" },
    { label: "Remote access to other Mac", href: "#" },
    { label: "Fix macOS Ventura problems", href: "#" },
    { label: "Best productivity apps", href: "#" },
    { label: "Best YouTube downloaders", href: "#" },
    { label: "Uninstall apps", href: "#" },
  ];

  return (
    <footer className="bg-[#2B2D32] relative z-20  pt-100 -mt-150 text-white  px-7.5">
      {/* Main Footer Content */}
      <div className="  border-t border-gray-300 pt-15 -mt-15  ">
        <div className="flex ">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-2">
            {/* Setapp Logo */}
            <div className="flex items-center gap-2 mb-19.5">
              <img src="/Frame.svg" alt="" />
              <span className="text-lg font-semibold tracking-wide">
                SETAPP
              </span>
            </div>

            {/* Newsletter */}
            <div className="w-[400px]">
              <p className="mb-4">
                Updates from our team, written with love{" "}
                <span className="text-orange-400">💛</span>
              </p>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#404547] text-white text-sm px-3 py-3.5 rounded-l-md w-full placeholder:text-gray-500 focus:outline-none"
                />
                <button className="bg-white text-black px-4 py-3 rounded-r-md hover:bg-gray-200 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex ml-auto">
            {/* Column 1 */}
            <div className="w-57.5">
              <ul className="space-y-3">
                {column1Links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-57.5">
              <ul className="space-y-3">
                {column2Links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="w-57.5">
              <ul className="space-y-3">
                {column3Links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="">
        <div className=" ">
          {/* DMCA and Language */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-10 ">
            <div className="flex items-center  font-bold  text-[11px] h-6.5 leading-6.5 text-center">
              <span className="w-10.25 bg-[#969799]">DMCA</span>
              <span className="w-21 bg-[#404547] ">PROTECTED</span>
            </div>
            <button className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors">
              <img src="/images/en.png" />
              <span>English</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-gray-300 pt-6 pb-10 ">
            <div>
              <p className=" text-xs mb-5">
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
                P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
              </p>
              <div className="flex gap-4 text-[#969799]">
                <a
                  href="#"
                  className="text-xs hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
                <a
                  href="#"
                  className="text-xs hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#3D3D3D] flex items-center justify-center hover:bg-[#4D4D4D] transition-colors"
              >
                <Facebook size={16} className="text-gray-300" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#3D3D3D] flex items-center justify-center hover:bg-[#4D4D4D] transition-colors"
              >
                <Twitter size={16} className="text-gray-300" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#3D3D3D] flex items-center justify-center hover:bg-[#4D4D4D] transition-colors"
              >
                <Instagram size={16} className="text-gray-300" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#3D3D3D] flex items-center justify-center hover:bg-[#4D4D4D] transition-colors"
              >
                <Youtube size={16} className="text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
