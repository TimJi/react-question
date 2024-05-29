import React from 'react'

interface DataCellProps {
  date: string;
}

const DataCell: React.FC<DataCellProps> = ({ date }) => {
  return (
    <div className="w-[50px] h-9 bg-white">
      {`${date}日`}
    </div>
  )
}

export default DataCell
