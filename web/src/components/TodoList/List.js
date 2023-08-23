import { useState } from "react";

import ListItem from "./ListItem";
import style from "./List.module.css";

function List (props){
    var listName = 'Todo';
    const [listItems, setListItems] = useState([
        {
            id: 1,
            description: 'Do My App',
            done: true
        },
        {
            id: 2,
            description: 'Lear how pass data from components',
            done: false
        }
    ]); 
    const [itemsDoneCount, setItemsDoneCount] = useState(countDoneItems()); 

    function countDoneItems(){
        var count = 0;
        for(var item of listItems){
            if(item.done){
                count++;
            }
        }
        return count;
    }

    function changeCountDoneItems(operation){
        switch(operation){
            case "add":
                setItemsDoneCount(itemsDoneCount+1);
                break;
            case "sub":
                setItemsDoneCount(itemsDoneCount-1);
                break;
            case "reset":
                setItemsDoneCount(0);
                break;
            default:
                console.log("Wrong operation:", operation);
                break;
        }
    }

    function handleChangeItemsDone(id, operation){
        setListItems(
            listItems.map(function(item){
                if(item.id === id){
                    item.done = !item.done;
                }
                return item;
            })
        );
        changeCountDoneItems(operation);
    }


    return (
        <div className={`${style.listBorders} ${props.className ? props.className:""}`}>
            <div>
                <h2 className={style.listHeader}>{listName}</h2>
                <b>Concluídos: {itemsDoneCount}</b>
            </div>
            {listItems.map(function (item){
                return (
                    <ListItem key={item.id} itemData={item} onChangeDoneStatus={handleChangeItemsDone}/>
                )
            })}
        </div>
    );
}

export default List;