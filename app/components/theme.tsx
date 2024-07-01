"use client";
import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import { MoonStar, Sun } from "lucide-react";

function Theme() {
  useEffect(() => themeChange(false), []);
  return (
    <div className="absolute right-4">
      <button data-set-theme="dark" data-act-class="hidden">
        <MoonStar strokeWidth={1.8} />
      </button>
      <button data-set-theme="light" data-act-class="hidden">
        <Sun strokeWidth={1.8} />
      </button>
    </div>
  );
}

export default Theme;
