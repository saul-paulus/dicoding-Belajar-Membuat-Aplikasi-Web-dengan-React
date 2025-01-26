import React from "react";

import Cari from "../components/Input/Cari";

function Navbar({titleBrand,onSearch}){
    return (
        <div className="note-app__header">
            <h1>{titleBrand}</h1>
            <Cari onSearch={onSearch}/>
        </div>
    );
}

export default Navbar;