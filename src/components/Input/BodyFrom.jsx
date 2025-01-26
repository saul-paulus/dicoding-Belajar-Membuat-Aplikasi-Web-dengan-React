import React from "react";



class BodyFrom  extends React.Component {

    constructor(props){
        super(props);

        // Inisialisasi state
        this.state = {
            title:"",
            body:"",
            archived: false,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onDescChangeEventHandler = this.onDescChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(e){
        const titValue = e.target.value;
        this.setState({title: titValue});

        if(this.props.onTitleChange){
            this.props.onTitleChange(titValue);
        }
    }

    onDescChangeEventHandler(e){
        const desc = e.target.value;
        this.setState({body: desc})
    }

    async onSubmitEventHandler(e){
        e.preventDefault();
        const{title, body} = this.state;
        if(title.trim() ==""){
            alert('Title wajib diinput');
            return;
        }else if(body.trim() == ""){
            alert('Deskripsi wajib diinput');
            return;
        }

        const reqPayload = {
            title,
            body,
            createdAt: new Date(),
            archived: this.state.archived
        }

        try{
            const isStore = await this.props.addNote(reqPayload);
            if (isStore) {
                alert("Catatan berhasil ditambahkan");
                this.setState({
                    title: "",
                    body: "",
                    archived: false,
                });
            } else {
                alert("Gagal menambahkan catatan. Silakan coba lagi.");
            }
        }catch(error){
            alert("Terjadi kesalahan saat menyimpan catatan");
            console.error(error);
        }
    }


    render(){
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <input 
                    type="text" 
                    className="note-input__title" 
                    name="title" 
                    value={this.state.title}
                    placeholder="Judul catatan..."
                    onChange={this.onTitleChangeEventHandler}
                />
                <textarea 
                    className="note-input__body" 
                    name="body" 
                    value={this.state.body}
                    placeholder="Tulis deskripsi catatan..." 
                    onChange={this.onDescChangeEventHandler}
                />
                <button type="submit" >Buat catatan</button>
            </form>
        );
    }
}

export default BodyFrom;