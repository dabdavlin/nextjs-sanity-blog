import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex flex-row justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5 flex-shrink-0">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer pr-8 md:pr-0"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5 cursor-pointer">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600 mr-20 cursor-pointer">
        <h3>Sign In</h3>
        <h3 className="border rounded-full border-green-600 px-4 py-1">
          Get Started
        </h3>
      </div>
    </header>
  );
};

export default Header;
