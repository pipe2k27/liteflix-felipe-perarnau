import React from "react";
import { Menu, Bell, User, UserCircle, Plus } from "lucide-react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Button from "./button";

const Navbar: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center justify-between w-full h-16 px-20 bg-transparent fixed top-0 left-0 z-40">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt="Logo" className="h-6 w-auto" />{" "}
        <Button
          text="Agregar Película"
          variant="transparent"
          className="border-none"
          Icon={Plus}
        />
      </div>

      <div className="flex items-center space-x-4 text-white">
        <Menu className="w-6 h-6 cursor-pointer" />
        <Bell className="w-6 h-6 cursor-pointer" />
        <UserCircle className="w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
