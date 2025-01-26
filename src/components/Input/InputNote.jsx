import React from "react";

import InputForm from "./InputForm";


function InputNote({title, addNote}){
    return(
        <div className="note-input">
            <h2>{title}</h2>
            <InputForm addNote={addNote}/>
        </div>
    );
}


export default InputNote;