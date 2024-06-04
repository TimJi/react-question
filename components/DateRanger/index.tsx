'use client'

import DataCell from '@/components/DateRanger/DataCell'
import React, { useState } from 'react'
import { MonthController } from '@/components/DateRanger/MonthController'

interface DataRangerProps {
  prevMonthDays: string[];
  nextMonthDays: string[];
  currentMonthDays: string[];
}

const DateRanger: React.FC<DataRangerProps> = ({ prevMonthDays, nextMonthDays, currentMonthDays }) => {
  const [year, setYear] = useState('2022')
  const [month, setMonth] = useState('7')

  return (
    <div className="flex justify-center text-base">
      <div className="w-[350px] h-[210px]">
        <div className="flex h-11 text-center mb-4 leading-11">
          <MonthController>{'<'}</MonthController>
          <div className="flex-grow text-center">{`${year}年${month}月`}</div>
          <MonthController>{'>'}</MonthController>
        </div>
        <div className="flex w-[350px] flex-wrap">
          {prevMonthDays.map((date, index) => (
            <DataCell date={date} key={index} isNonCurrentMonth/>
          ))}
          {currentMonthDays.map((date, index) => (
            <DataCell date={date} key={index} />
          ))}
          {nextMonthDays.map((date, index) => (
            <DataCell date={date} key={index} isNonCurrentMonth />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DateRanger
