import React from "react";
import { Container } from "./ui/container";
import Link from "next/link";
import { MainNav } from "./main-nav";
import getCategory from "@/actions/get-categoris";
import { NavbarActions } from "./navbar-actions";

interface NavbarProps {}

export const revalidate = 0;

const Navbar: React.FC<NavbarProps> = async ({}) => {
  const categories = await getCategory();
  return (
    <nav className="border-b">
      <Container>
        <div className="relative px-4  sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl uppercase">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
