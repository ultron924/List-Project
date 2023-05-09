export function ListItem({completed, id, title, toggleList, deleteList}){
    return (
        <li>
            <label>
                <input 
                  type="checkbox"
                  checked={completed}
                  onChange={e => toggleList(id,e.target.checked)}
                  />
                  {title}
            </label>
            <button onClick={()=> deleteList(id)} className="btn btn-danger">
                Remove
            </button>
        </li>
    )
}