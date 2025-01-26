import React from "react";

import NoteItemBody from "./NoteItemBody";


function NoteListItem({ notes, onDelete,onArchived }){

    if(notes.length == 0){
        return <p className="note-empty">Tidak ada catatan</p>
    }

    return (
        <div className="notes-list">
            {notes.map((note) =>(
                <NoteItemBody 
                key={note.id}
                title={note.title}
                createdAt={note.createdAt}
                body={note.body}
                id={note.id}
                onDelete={onDelete}
                onArchived={onArchived}
                />
            ))}
        </div>
    );
}

export default NoteListItem;