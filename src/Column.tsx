import { ColumnContainer, ColumnTitle } from "./styles"
import { AddNewItem } from "./AddNewItem"
import { useAppState } from "./state/AppStateContext"
import { Card } from "./Card"
import { addTask } from "./state/actions"
import { useRef } from "react"
import { useItemDrag } from "./utils/useItemDrag"

type ColumnProps = {
  text: string
  id: string
}

export const Column = ({ text, id }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id)
  // ref is for grabbing the DOM element (HTML div) beyond React's VirtualDOM
  const ref = useRef<HTMLDivElement>(null)

  const { drag } = useItemDrag({ type: "COLUMN", id, text })

  drag(ref)

  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle> {text} </ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        onAdd={(text) => dispatch(addTask(text, id))}
        toggleButtonText="+ Add another task"
        dark
      />
    </ColumnContainer>
  )
}
