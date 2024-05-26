import { User } from '@/types/user'
import { users } from '@/data/users'
import React from 'react'
import UsersList from '@/components/UsersList'

const professionWeightedIndexLookup: Record<string, number> = {
  'systemAnalytics': 1,
  'engineer': 2,
  'productOwner': 3,
  'freelancer': 4,
  'student': 5,
}

function sortByType(user: User[]): void {
  user.sort((a, b) => {
    const orderA = professionWeightedIndexLookup[a.profession]
    const orderB = professionWeightedIndexLookup[b.profession]
    return orderA - orderB
  })
}

const Question_1_Q2 = () => {
  const originalArray = [...users]
  const orderedArray = [...users]
  sortByType(orderedArray)

  return <>
    <h2>Original Array</h2>
    <UsersList users={originalArray} />
    <br />
    <h2>Sorted Array</h2>
    <UsersList users={orderedArray} />
  </>
}

export default Question_1_Q2
