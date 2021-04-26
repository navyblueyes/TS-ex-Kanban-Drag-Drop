// Define two actions -- adding a list; adding a task

import { DragItem } from "../DragItem"

export type Action =
  | {
      type: "ADD_LIST"
      payload: string
    }
  | {
      type: "ADD_TASK"
      payload: { text: string; listId: string }
    }
  | {
      type: "MOVE_LIST"
      payload: { draggerId: string; hoverId: string }
    }
  | {
      type: "MOVE_TASK"
      payload: {
        draggerItemId: string
        hoverItemId: string | null
        sourceColumnId: string
        targetColumnId: string
      }
    }
  | {
      type: "SET_DRAGGED_ITEM"
      payload: DragItem | null
    }

export const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId,
  },
})

export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
})

// draggerId is a way to store column's id
// hoverId is a way to store the id of the position's id
export const moveList = (draggerId: string, hoverId: string): Action => ({
  type: "MOVE_LIST",
  payload: {
    draggerId,
    hoverId,
  },
})

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem,
})

export const moveTask = (
  draggerItemId: string,
  hoverItemId: string | null,
  sourceColumnId: string,
  targetColumnId: string
  ): Action => ({
    type: "MOVE_TASK",
    payload: {
      draggerItemId,
      hoverItemId,
      sourceColumnId,
      targetColumnId
  }
})
