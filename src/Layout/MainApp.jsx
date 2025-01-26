import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import BodyNote from '../components/BodyNote';
import { getInitialData } from '../utils';

class MainApp extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
            titleBodyNote: "Tulis catatan anda!",
            titleBrand: "myNotes"
        }


        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    }


    onAddNoteHandler({title,body,createdAt,archived }){
        try{
            this.setState((prevState)=>({
                notes:[
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt,
                        archived,
                    }
                ]
            }));
            return true;
        }catch(error){
            throw error;
        }
    }
    onSearchNoteHandler(keySearch) {
        const notes = this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(keySearch.toLowerCase())
        );
        this.setState({ notes});
    }
    

    onDeleteNoteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onArchivedHandler(id){
        const notes = this.state.notes.map(note => {
            if (note.id === id) {
                return { 
                    ...note, 
                    archived: !note.archived
                };
            }
            return note; 
        });
        this.setState({notes});
    }

    render(){
        return (
            <div className="main-app">
                <Navbar titleBrand={this.state.titleBrand} onSearch={this.onSearchNoteHandler}/>
                <BodyNote addNote={this.onAddNoteHandler} notes={this.state.notes} onDelete={this.onDeleteNoteHandler} onArchived={this.onArchivedHandler} titleBodyNote={this.state.titleBodyNote} onSearch={this.onSearchNoteHandler} />
                <Footer/>
            </div>
        );
    }
}

export default MainApp;