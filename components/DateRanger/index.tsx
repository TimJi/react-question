import DataCell from '@/components/DateRanger/DataCell'
import React from 'react'

interface DataRangerProps {
  prevMonth: string[];
  nextMonth: string[];
  currentMonth: string[];
}

const DateRanger: React.FC<DataRangerProps> = ({ prevMonth, nextMonth, currentMonth }) => {
  return (
    <div>
      <div className="header flex">
        <div>{'<'}</div>
        <div>Current</div>
        <div>{'>'}</div>
      </div>
      <div className="flex">
        {prevMonth.map((date, index) => (
          <div key={index}>
            <DataCell date={date} />
          </div>
        ))}
        {currentMonth.map((date, index) => (
          <div key={index}>
            <DataCell date={date} />
          </div>
        ))}
        {nextMonth.map((date, index) => (
          <div key={index}>
            <DataCell date={date} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DateRanger
