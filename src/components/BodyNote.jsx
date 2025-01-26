import React from "react";

import InputNote from "./Input/InputNote";
import NoteListItem from "./ListNote/NoteListItem";


function BodyNote({addNote,notes,onDelete,onArchived,titleBodyNote}){
    return (
        <div className="note-app__body">
            <InputNote addNote={addNote} title={titleBodyNote}/>
            <h2>Catatan Aktif</h2>
            <NoteListItem notes={notes.filter(note => !note.archived)} onDelete={onDelete} onArchived={onArchived}/>
            <h2>Arsip</h2>
            <NoteListItem notes={notes.filter(note => note.archived)} onDelete={onDelete} onArchived={onArchived} />
        </div>
    )

}

export  default BodyNote;
