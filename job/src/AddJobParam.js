import React, { useState } from 'react';

function AddJobParam({clearBoard, onAdd}) {
    const [showAddButton, setShowAddButton] = useState(false);
    const [newParam, setNewParam] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        if (!newParam) {
            alert("Please add new parameter for job list");
            return;
        }
        onAdd({ newParam });
        setNewParam('');
    }
    
    return (
        <div className="addParam">
            <div className="addParam__container">
                <div className="addParam__container__button">
                    <button className="add" onClick={() => setShowAddButton(!showAddButton)}>{showAddButton ? "Hide" : "Add parameter"}</button>
                    <div className="clear"> 
                        <span onClick={() => clearBoard()}>Clear</span>
                    </div>
                </div>
            

                {showAddButton && (
                <form className="addJobParamForm" onSubmit={onSubmit}>
                    <label>What are you looking for?</label>
                    <div className="formContainer">
                        <input type="text" value={newParam} onChange={e => setNewParam(e.target.value)}/>
                        <button type="submit" className="add">add</button>
                    </div>
                </form>
                )}
            </div>
        </div>
    )
}

export default AddJobParam
