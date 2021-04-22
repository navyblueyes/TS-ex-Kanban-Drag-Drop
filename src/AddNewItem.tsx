import { useState } from "react"
import { AddItemButton } from "./styles"

type AddNewItemsProps = {
  onAdd(text: string): void
  // ^- function that REQUIRES string as an argument
  toggleButtonText: string
  dark?: boolean
}

export const AddNewItem = (props: AddNewItemsProps) => {
  const [showForm, setShowForm] = useState<boolean>(false)
  // ^- boolean that shows form ONLY IF "create" button is pushed
  const { onAdd, toggleButtonText, dark } = props

  if (showForm) {
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}
