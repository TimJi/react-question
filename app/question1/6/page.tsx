'use client'
import { Component } from 'react'

let timer: any = null

class SearchBox extends Component {
  handleOnChange = (event: any) => {
    /** Please write the sample code to debounce handleOnChange **/
    clearTimeout(timer)
    timer = setTimeout(() => {
      console.log(event.target.value)
    }, 1000)
  }

  render() {
    return <input style={{
      outline: '#0000FF solid 1px',
    }} type="search" name="p" onChange={this.handleOnChange} />
  }
}

const Question_1_6 = () => {
  return <>
    <h2>Debounce</h2>
    <SearchBox />
  </>
}

export default Question_1_6
