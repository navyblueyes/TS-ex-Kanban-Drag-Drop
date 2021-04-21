import React from "react"

type CounterState = {
  count: number
}
// type is for shaping data
// interface is for describing API of a class -- detect property conflicts faster

// class components NEED to provide types for its props and states
// functional components NOT NEED to provide types ... the return element defines it
export class Counter extends React.Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  }

  private increment = () => {}

  private decrement = () => {}

  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }
}
