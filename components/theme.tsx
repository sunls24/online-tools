"use client";
import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import { MoonStar, Sun } from "lucide-react";

const THEME_KEY = "theme";

function Theme() {
  useEffect(() => {
    if (!localStorage.getItem(THEME_KEY)) {
      localStorage.setItem(THEME_KEY, "light");
    }
    themeChange(false);
  }, []);

  return (
    <div className="absolute right-6">
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
