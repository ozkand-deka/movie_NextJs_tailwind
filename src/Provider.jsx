"use client"

import { ThemeProvider } from 'next-themes'
import React from 'react'

const Provider = ({children}) => { 
  return (
    <ThemeProvider  enableSystem={true} attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}

export default Provider
