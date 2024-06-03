import DateRanger from '../../../components/DateRanger'
import dayjs from 'dayjs'

const Question_2_task1 = () => {
  const today = dayjs()
  const daysInMonth = today.daysInMonth()
  const dates = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
  return <>
    <h1>Question 2 Task 1</h1>
    <DateRanger prevMonthDays={['1', '2', '3']} currentMonthDays={dates} nextMonthDays={[]} />
  </>
}

export default Question_2_task1
