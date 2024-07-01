import React from "react";
import Link from "next/link";
import { DraftingCompass } from "lucide-react";
import Theme from "@/app/components/theme";

function Header() {
  return (
    <div className="card-md navbar relative flex min-h-0 justify-center p-4 font-medium sm:justify-start">
      <Link href="/" className="flex items-center gap-1">
        <DraftingCompass />
        <span>工具箱</span>
        <sup>OL</sup>
      </Link>
      <Theme />
    </div>
  );
}

export default Header;
