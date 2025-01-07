"use client"
import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
const ThemeComp = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()


  useEffect(() => {
    setMounted(true)
  }, [])
  console.log(systemTheme)
  if (!mounted) {
    return null
  }
  const themeMode = theme === "system" && systemTheme ? systemTheme : theme

  console.log(themeMode)
  return (
    <div>
    {themeMode === "dark" ? (
      <MdDarkMode onClick={() => setTheme("light")} size={25} className="cursor-pointer" />
    ) : (
      <IoIosSunny onClick={() => setTheme("dark")} size={25} className="cursor-pointer" />
    )}
  </div>
  )
}

export default ThemeComp
