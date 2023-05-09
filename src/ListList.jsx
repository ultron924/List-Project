import { ListItem } from "./ListItem"

export function ListList({ list, toggleList, deleteList}){
    return(
        <ul className="list">
            {list.lenght === 0 && "No List"}
            {list.map(list=>{
                return(
                    <ListItem
                     {...list}
                     key={list.id}
                     toggleList={toggleList}
                     deleteList={deleteList}
                     />
                )
            })}
        </ul>
    )
}