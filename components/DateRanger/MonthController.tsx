import React from 'react'

interface MonthControllerProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const MonthController = ({ children, onClick }: MonthControllerProps) => {
  return (
    <div
      className="w-[50px] hover:bg-[#e6e6e6] text-center cursor-pointer select-none"
      onClick={onClick}
    >
      {children}
    </div>
  )
}
