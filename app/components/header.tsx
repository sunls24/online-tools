import React from "react";
import Link from "next/link";
import { DraftingCompass } from "lucide-react";

function Header() {
  return (
    <div className="card-md navbar flex min-h-0 justify-center p-4 font-medium sm:justify-start">
      <Link href="/" className="flex items-center gap-1">
        <DraftingCompass />
        <span>工具箱</span>
        <sup>OL</sup>
      </Link>
    </div>
  );
}

export default Header;
