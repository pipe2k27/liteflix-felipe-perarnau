import React from "react";
import { Menu, Bell, User, UserCircle, Plus } from "lucide-react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Button from "./button";

const NavbarMobile: React.FC = () => {
  return (
    <nav className="lg:hidden flex items-center justify-between w-full h-16 px-4 bg-transparent absolute top-0 left-0 z-40">
      <div className="flex items-center space-x-4">
        <Menu className="w-6 h-6 cursor-pointer" />
      </div>
      <Image src={logo} alt="Logo" className="h-6 w-auto" />{" "}
      <div className="flex items-center space-x-4 text-white">
        <UserCircle className="w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavbarMobile;
