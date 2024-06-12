import React from 'react'

interface DataCellProps {
  date: string;
  isNonCurrentMonth?: boolean;
  isCurrentDate?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
}

const DataCell: React.FC<DataCellProps> =
  ({
     date,
     isNonCurrentMonth = false,
     isCurrentDate = false,
     isSelected = false,
     onClick,
   }) => {
    let NON_CURRENT_MONTH_STYLE = ' text-[#757575] cursor-not-allowed'
    let CURRENT_MONTH_STYLE = ' cursor-pointer'
    let backgroundColor = ' bg-white'
    if (isSelected) {
      backgroundColor = ' bg-[#006edc]'
    } else if (isCurrentDate) {
      backgroundColor = ' bg-[#ffff76]'
    } else {
      backgroundColor = ' bg-white'
    }
    return (
      <div
        className={'w-[50px] h-9 leading-9 text-center' +
          (isNonCurrentMonth ? NON_CURRENT_MONTH_STYLE : CURRENT_MONTH_STYLE) +
          backgroundColor}
        onClick={onClick}
      >
        {`${date}日`}
      </div>
    )
  }


export default DataCell
