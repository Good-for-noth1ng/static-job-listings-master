import React from 'react'
import AddJobParam from './AddJobParam'

function Board({ onDelete, params, clearBoard, onAdd }) {
    return (
        <div className="board jobList">
            <div className="board__content jobList__item" id="board__content">
                <AddJobParam clearBoard={clearBoard} onAdd={onAdd}/>
                <div className="params">
                    {params.map((param) => (
                        <span className="param"> 
                            <span className="param__name" key={param.id}>{param}</span>
                            <span className="param__delete" onClick={() => onDelete(param)}>
                                <img src="./images/icon-remove.svg" alt=""/>
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Board
