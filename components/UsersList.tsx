import { User } from '@/types/user'
import React from 'react'

const UsersList = ({ users }: { users: User[] }) => (
  <>
    {users.map((user) => (
      <li key={user.customerID}>
        <span>{user.firstName} {user.lastName} </span>
        <span>{user.customerID} </span>
        <span>{user.note} </span>
        <span>{user.profession}</span>
      </li>
    ))}
  </>
)

export default UsersList
