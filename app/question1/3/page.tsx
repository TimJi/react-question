let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1,
  3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1]

function getUniqueNumber(items: number[]) {
  // Please write down a function to console log unique value from this array.
  return Array.from(new Set(items))
}

const Question_1_3 = () => {
  const originalArray = [...items]
  const uniqueNumber = getUniqueNumber([...items])
  return <>
    <h1>Please write down a function to console log unique value from this array.</h1>
    <h2>Original Array</h2>
    <div>{originalArray.join(', ')}</div>
    <br />
    <h2>Unique Array</h2>
    <div>{uniqueNumber.join(', ')}</div>
  </>
}

export default Question_1_3
