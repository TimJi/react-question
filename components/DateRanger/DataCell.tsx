import React from 'react'

interface DataCellProps {
  date: string;
  isNonCurrentMonth?: boolean;
}

const DataCell: React.FC<DataCellProps> = ({ date, isNonCurrentMonth = false }) => {
  let NON_CURRENT_MONTH_STYLE = ' text-[#757575] cursor-not-allowed'
  let CURRENT_MONTH_STYLE = ' cursor-pointer'
  return (
    <div className={'w-[50px] h-9 bg-white hover:bg-[#e6e6e6] leading-9 text-center' +
      (isNonCurrentMonth ? NON_CURRENT_MONTH_STYLE : CURRENT_MONTH_STYLE)}>
      {`${date}日`}
    </div>
  )
}


export default DataCell
