import React from "react";

function NoteItemAction({id,onDelete,onArchived}){
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" id={id} onClick={() => onDelete(id)}>Delete</button>
            <button className="note-item__archive-button" id={id} onClick={()=> onArchived(id)}>Arsipkan</button>
        </div>
    );
}

export default NoteItemAction;