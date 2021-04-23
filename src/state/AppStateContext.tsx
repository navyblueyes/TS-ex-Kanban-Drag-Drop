import { createContext } from "react"

const AppStateContext = createContext()

type Task = {
  id: string
  text: string
}

type List = {
  id: string
  text: string
  tasks: Task[]
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "To Do",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
}

export type AppState = {
  lists: List[]
}
