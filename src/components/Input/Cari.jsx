import React from "react";


class Cari extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            keySearch:""
        }
    }

    onCariChangeEventHandler = (e) => {
        const searchValue = e.target.value;
        this.setState({ keySearch: searchValue });
        if(this.props.onSearch) {
            this.props.onSearch(searchValue);
        }
    };
    render(){
        return (
            <div className="note-search">
                <input 
                    type="text" 
                    placeholder="cari judul notes...." 
                    value={this.state.keySearch}
                    onChange={this.onCariChangeEventHandler}
                />
            </div>
        )
    }
}

export default Cari;