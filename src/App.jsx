import { useState, useEffect } from 'react'
import "./styles.css"
import { NewListForm } from './NewListForm'
import { ListList } from './ListList'

export default function App(){
  const [list, setList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return[]

    return JSON.parse(localValue)
  })


useEffect(()=> {
  localStorage.setItem("ITEMS",JSON.stringify(list))
}, [list])

function addList(title){
  setList(currentList =>{
    return [
      ...currentList,
      {id: crypto.randomUUID(), title, completed: false},
      
    ]
  })
}

function toggleList(id, completed){
  setList(currentList => {
    return currentList.map(list =>{
      if (list.id === id){
        return {...list, completed}
      }

      return list
    })
  })
}

function deleteList(id){
  setList(currentList => {
    return currentList.filter(list => list.id !== id)
  })
}

return (
  <>
   <NewListForm onSubmit={addList}/>
   <h1 className='header'>To Do List</h1>
   <ListList list={list} toggleList={toggleList} deleteList={deleteList} />
  </>
)
}