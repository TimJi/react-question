type User = {
  firstName: string;
  lastName: string;
  customerID: string;
  note: string;
  profession: 'student' | 'freelancer' | 'productOwner' | 'engineer' | 'systemAnalytics';
};

// Example usage:
const users: User[] = [
  { firstName: 'John', lastName: 'Doe', customerID: '123', note: '', profession: 'engineer' },
  { firstName: 'Jane', lastName: '', customerID: '456', note: 'note', profession: 'student' },
  { firstName: 'Alice', lastName: 'Smith', customerID: '789', note: '', profession: 'freelancer' },
  { firstName: 'Bob', lastName: 'Brown', customerID: '234', note: '', profession: 'productOwner' },
]

function sortUserName(user: User[]): void {
  user.sort((a, b) => {
    const keyA = a.firstName + a.lastName + a.customerID
    const keyB = b.firstName + b.lastName + b.customerID

    return keyA.localeCompare(keyB);
  })

  // Print the sorted array
  console.log(user)
}


const Q1_1 = () => {
  const originalArray = [...users]
  const orderedArray = [...users]
  sortUserName(orderedArray)

  return <>
    <h2>Original Array</h2>
    {originalArray.map((user) => (
        <li key={user.customerID}>
          <span>{user.firstName} {user.lastName} </span>
          <span>{user.customerID} </span>
          <span>{user.note} </span>
          <span>{user.profession}</span>
        </li>
      ),
    )}
    <br />
    <h2>Sorted Array</h2>
    {orderedArray.map((user) => (
        <li key={user.customerID}>
          <span>{user.firstName} {user.lastName} </span>
          <span>{user.customerID} </span>
          <span>{user.note} </span>
          <span>{user.profession}</span>
        </li>
      ),
    )}
  </>
}

export default Q1_1
