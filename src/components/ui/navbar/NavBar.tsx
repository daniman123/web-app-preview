"use client";

import NavLogo from "../navLogo/NavLogo";

const NavBar: React.FC = () => {
  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <NavLogo />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
