'use client'

import DataCell from '@/components/DateRanger/DataCell'
import React, { useEffect, useState } from 'react'
import { MonthController } from '@/components/DateRanger/MonthController'
import dayjs from 'dayjs'

const DateRanger = () => {
  const [year, setYear] = useState(dayjs().format('YYYY'))
  const [month, setMonth] = useState(dayjs().format('M'))
  const [yearMonth, setYearMonth] = useState(dayjs().format('YYYY-MM'))
  const [prevMonthDays, setPrevMonthDays] = useState<string[]>([])
  const [currentMonthDays, setCurrentMonthDays] = useState<string[]>([])
  const [nextMonthDays, setNextMonthDays] = useState<string[]>([])
  const [selectedRangeDate, setSelectedRangeDate] = useState<string[]>([])

  let onMonthIncrement = () => {
    setYearMonth(dayjs(yearMonth).add(1, 'month').format('YYYY-MM'))
    selectedRangeDate.length && setSelectedRangeDate([])
  }
  let onMonthDecrement = () => {
    setYearMonth(dayjs(yearMonth).subtract(1, 'month').format('YYYY-MM'))
    selectedRangeDate.length && setSelectedRangeDate([])
  }

  useEffect(() => {
    setYear(dayjs(yearMonth).format('YYYY'))
    setMonth(dayjs(yearMonth).format('M'))
    setPrevMonthDays(
      Array.from(
        { length: dayjs(yearMonth).startOf('month').day() },
        (_, i) => dayjs(yearMonth).subtract(1, 'month').endOf('month').date() - i,
      ).reverse().map((date) => date.toString()),
    )
    setCurrentMonthDays(
      Array.from(
        { length: dayjs(yearMonth).daysInMonth() },
        (_, i) => i + 1,
      ).map((date) => date.toString()),
    )
    setNextMonthDays(
      Array.from(
        { length: 6 - dayjs(yearMonth).endOf('month').day() },
        (_, i) => i + 1,
      ).map((date) => date.toString()),
    )
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
          {currentMonthDays.map((date, index) => {
            let isSelected = selectedRangeDate.length === 2 ?
              Number(selectedRangeDate[0]) <= Number(date) && Number(date) <= Number(selectedRangeDate[1])
              : selectedRangeDate[0] === date
            return (
              <DataCell
                date={date}
                key={index}
                isCurrentDate={dayjs().format('YYYY-MM-DD') === `${yearMonth}-${date}`}
                isSelected={isSelected}
                onClick={() => {
                  setSelectedRangeDate((prev) => {
                    if (prev.length === 1 && prev[0] !== date) {
                      return Number(prev[0]) < Number(date) ? [prev[0], date] : [date, prev[0]]
                    }
                    return [date]
                  })
                }}
              />
            )
          })}
          {nextMonthDays.map((date, index) => (
            <DataCell date={date} key={index} isNonCurrentMonth />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DateRanger
