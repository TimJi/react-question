'use client'

import DataCell from '@/components/DateRanger/DataCell'
import React, { useEffect, useState } from 'react'
import { MonthController } from '@/components/DateRanger/MonthController'
import dayjs from 'dayjs'

interface DataRangerProps {
  prevMonthDays: string[];
  nextMonthDays: string[];
  currentMonthDays: string[];
}

const DateRanger: React.FC<DataRangerProps> = ({ prevMonthDays, nextMonthDays, currentMonthDays }) => {
  const [year, setYear] = useState(dayjs().format('YYYY'))
  const [month, setMonth] = useState(dayjs().format('M'))
  const [yearMonth, setYearMonth] = useState(dayjs().format('YYYY-MM'))

  let onMonthIncrement = () => {
    setYearMonth(dayjs(yearMonth).add(1, 'month').format('YYYY-MM'))
  }
  let onMonthDecrement = () => {
    setYearMonth(dayjs(yearMonth).subtract(1, 'month').format('YYYY-MM'))
  }

  useEffect(() => {
    setYear(dayjs(yearMonth).format('YYYY'))
    setMonth(dayjs(yearMonth).format('M'))
  }, [yearMonth])

  return (
    <div className="flex justify-center text-base">
      <div className="w-[350px] h-[210px]">
        <div className="flex h-11 text-center mb-4 leading-11">
          <MonthController onClick={onMonthDecrement}>{'<'}</MonthController>
          <div className="flex-grow text-center">{`${year}年${month}月`}</div>
          <MonthController onClick={onMonthIncrement}>{'>'}</MonthController>
        </div>
        <div className="flex w-[350px] flex-wrap">
          {prevMonthDays.map((date, index) => (
            <DataCell date={date} key={index} isNonCurrentMonth />
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
