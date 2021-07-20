import React from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 py-1 lg:py-2 backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-50 shadow-lg z-20">
      <nav className="container mx-auto flex items-center relative text-base">
        <Logo />
        <NavLinks />
        <SearchBar />
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
