"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoColorPalette } from "react-icons/io5";

export default function ThemeComp() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;
  return (
    <div className="flex items-center text-2xl">
      {mounted &&
        (themeMode === "light" ? (
          <IoColorPaletteOutline
            onClick={() => setTheme("dark")}
            className="text-9xl max-[768px]:text-xl transform 
            hover:-translate-y-10 transition-all duration-500 cursor-pointer text-[#DDE6ED]"
          />
        ) : (
          <IoColorPalette
            onClick={() => setTheme("light")}
            className="text-9xl text-white max-[768px]:text-xl transform 
            hover:-translate-y-10 transition-all duration-500 dark:text-[#27374D] cursor-pointer"
          />
        ))}
    </div>
  );
}
