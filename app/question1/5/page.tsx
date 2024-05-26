'use client'
import React from 'react'

type MyProps = {}
type MyState = { count: number; }

class Question_1_4 extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props)
    this.state = { count: 0 }
    this.handleAddCount = this.handleAddCount.bind(this)
  }

  // 先看需求是什麼，這個 function 的名稱是 handleAddCount，可是卻沒說一次要加多少
  // 所以我們要先確認需求，是要一次加一還是一次加三，還是其他數字
  // 如果是一次加一，那就是這樣寫
  // handleAddCount() {
  //   this.setState((prevState) => ({ count: prevState.count + 1 }))
  // }

  // 如果是一次加三，那就是這樣寫
  // handleAddCount() {
  //   this.setState((prevState) => ({ count: prevState.count + 3 }))
  // }

  // 如果是其他數字，那就是這樣寫
  // handleAddCount(increment: number) {
  //   this.setState((prevState) => ({ count: prevState.count + increment }))
  // }

  // 這邊我們先寫一個一次加一的 function
  // 可以用 setState 的 callback function，但這種寫法有一點波動拳 + callback hell
  // handleAddCount() {
  //   this.setState((prevState) => ({ count: prevState.count + 1 }),
  //     () => this.setState((prevState) => ({ count: prevState.count + 1 }),
  //       () => this.setState((prevState) => ({ count: prevState.count + 1 })),
  //     ),
  //   )
  // }

  // 不如加一個 async function 來解決這個問題
  async handleAddCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={this.handleAddCount}>增加</button>
      </div>
    )
  }
}

export default Question_1_4
