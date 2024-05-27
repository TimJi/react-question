import { User } from '@/types/user'
import { Profession } from '@/enums/profession'

export const users: User[] = [
  { firstName: 'John', lastName: 'Doe', customerID: '123', note: '', profession: Profession.engineer },
  { firstName: 'Jane', lastName: 'Lee', customerID: '456', note: 'note', profession: Profession.student },
  { firstName: 'Alice', lastName: 'Smith', customerID: '789', note: '', profession: Profession.freelancer },
  { firstName: 'Bob', lastName: 'Brown', customerID: '234', note: '', profession: Profession.productOwner },
  { firstName: 'Charlie', lastName: 'White', customerID: '567', note: 'note', profession: Profession.systemAnalytics },
]
