import { User } from '@/types/user'
import { users } from '@/data/users'
import UsersList from '@/components/UsersList'

function sortUserName(user: User[]): void {
  user.sort((a, b) => {
    const keyA = a.firstName + a.lastName + a.customerID
    const keyB = b.firstName + b.lastName + b.customerID

    return keyA.localeCompare(keyB)
  })
}


const Question_1_Q1 = () => {
  const originalArray = [...users]
  const orderedArray = [...users]
  sortUserName(orderedArray)

  return <>
    <h2>Original Array</h2>
    <UsersList users={originalArray} />
    <br />
    <h2>Sorted Array</h2>
    <UsersList users={orderedArray} />
  </>
}

export default Question_1_Q1
