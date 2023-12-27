"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuSun, LuMoonStar } from "react-icons/lu";

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
          <LuMoonStar
            onClick={() => setTheme("dark")}
            className="max-[768px]:text-xl transform cursor-pointer"
          />
        ) : (
          <LuSun
            onClick={() => setTheme("light")}
            className="text-white max-[768px]:text-xl transform dark:text-white
             cursor-pointer"
          />
        ))}
    </div>
  );
}
