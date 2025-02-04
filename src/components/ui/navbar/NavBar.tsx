"use client";

import Link from "next/link";
import { useState } from "react";

export interface INavBar {
  sampleTextProp: string;
}

const NavBar: React.FC<INavBar> = ({ sampleTextProp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Lorem", "Ipsum", "Dolor", "Sit"];

  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white backdrop-blur-lg transition-all">
      <div className="w-full max-w-full px-12">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            {sampleTextProp}
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden h-full gap-12 md:flex">
            {menuItems.map((item) => (
              <li
                key={item}
                className="flex items-center justify-between font-semibold cursor-pointer hover:text-gray-600 transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div
            id="burger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-block cursor-pointer md:hidden font-bold text-4xl"
          >
            {isMenuOpen ? <>&#10005;</> : <>&equiv;</>}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"} transition-all duration-300`}
        >
          <ul className="flex flex-col bg-white pb-4 space-y-4">
            {menuItems.map((item) => (
              <li
                key={item}
                className="font-semibold cursor-pointer hover:text-gray-600 transition-colors px-4 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
