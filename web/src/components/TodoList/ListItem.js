function ListItem ({itemData, onChangeDoneStatus}) {

    var itemDescription = itemData.description;

    return (
        <div>
            <input id={itemData.id} type="checkbox" checked={itemData.done} onChange={() => onChangeDoneStatus(itemData.id, (itemData.done ? "sub" : "add"))}/>
            <label htmlFor={itemData.id}>{itemDescription}</label>
        </div>
    )
}

export default ListItem;