import React, { useState } from "react";

import BodyFrom from "./BodyFrom";

function InputForm({addNote}){
  const karakter = 50;
  const [sisaKarakter, setSisaKarakter] = useState(karakter); 

  const handlerTitleChange = (title) => {
    if(title.length > karakter){
      alert(`Karakter tidak boleh lebih dari ${karakter} karakter`);
      return;
    }
    setSisaKarakter(karakter - title.length);
  };
  return (
    <div>
      <p className="note-input__title__char-limit">{sisaKarakter}</p>
      <BodyFrom addNote={addNote} onTitleChange={handlerTitleChange}/>
    </div>
  );
}

export default InputForm;