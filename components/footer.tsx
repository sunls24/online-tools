import React from "react";
import { GITHUB_URL, VERSION } from "@/lib/constants";
import { Github } from "lucide-react";

function Footer() {
  return (
    <footer className="flex grow items-end justify-center pb-4">
      <a
        target="_blank"
        href={GITHUB_URL}
        className="btn btn-ghost btn-sm gap-1 px-2"
      >
        <Github size={18} />
        <span className="underline underline-offset-2">v{VERSION}</span>
      </a>
    </footer>
  );
}

export default Footer;
