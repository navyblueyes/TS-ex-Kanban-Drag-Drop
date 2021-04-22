import { FC } from "react"
import { Column } from "./Column"
import { Card } from "./Card"
import { AddNewItem } from "./AddNewItem"

import { AppContainer } from "./styles"

export const App: FC = ({ children }) => {
  return (
    <AppContainer>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  )
}
