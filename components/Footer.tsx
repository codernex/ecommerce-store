"use client";

import Link from "next/link";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-white border-t">
      <div className="ml-auto py-10">
        <p className="text-center text-sm text-black group ">
          &copy;
          <Link
            className="group-hover:underline group-hover:text-[#F66A3D] transition-all duration-75"
            href="https://github.com/codernex"
          >
            Codernex
          </Link>
          Next Store
        </p>
      </div>
    </footer>
  );
};
export default Footer;
