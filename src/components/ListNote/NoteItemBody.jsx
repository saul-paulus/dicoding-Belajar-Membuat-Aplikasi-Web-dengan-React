import React from "react";

import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItemBody({title,createdAt,body, onDelete, id,onArchived}){
    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            <NoteItemAction id={id} onDelete={onDelete} onArchived={onArchived} />
        </div>
    );
}

export default NoteItemBody;