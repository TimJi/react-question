import React from 'react'

interface MonthControllerProps {
  children: React.ReactNode;
}

export const MonthController = ({ children }: MonthControllerProps) => {
  return (
    <div className="w-[50px] hover:bg-[#e6e6e6] text-center">
      {children}
    </div>
  )
}
