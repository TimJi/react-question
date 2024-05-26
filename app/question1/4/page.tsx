// Can you explain about Interface and Enum, and where will you be using, please make some examples.
// Interface ( 介面 ) : 用來定義你的物件的結構，可以用來檢查物件是否符合這個介面
// Enum ( 枚舉、列舉 ) : 用來定義一組常數，檢查變數是否符合這組常數

import { Profession } from '@/enums/profession'

interface User {
  firstName: string;
  lastName: string;
  customerID: string;
  profession: Profession;
}
// Example of using Interface:
const user: User = {
  firstName: 'John',
  lastName: 'Doe',
  customerID: '123',
  profession: Profession.engineer,
}

const Question_1_4 = () => {
  return <>
    <h2>Interface and Enum example</h2>
    <li key={user.customerID}>
      <span>{user.firstName} {user.lastName} </span>
      <span>{user.customerID} </span>
      <span>{user.profession}</span>
    </li>
  </>
}

export default Question_1_4
