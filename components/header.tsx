import React from "react";
import Link from "next/link";
import { DraftingCompass } from "lucide-react";
import Theme from "@/components/theme";

function Header() {
  return (
    <header className="card-md navbar relative my-4 flex min-h-0 shrink-0 justify-center px-6 py-4 font-medium sm:justify-start">
      <Link href="/" className="flex items-center gap-1">
        <DraftingCompass />
        <span>工具箱</span>
        <sup>OL</sup>
      </Link>
      <Theme />
    </header>
  );
}

export default Header;
