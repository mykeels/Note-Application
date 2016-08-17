
class NoteApplication {
    
    /** 
     * @constructor
     * Class constructor
     * @param: author - author of all notes written
    */
    constructor(author) {
        this.author = author;   
        this.notes = [];   
    }
    
    /** 
     * function create() to write new note
     * @param: note_content - the content of note to be saved
    */
    create(note_content) {
        this.notes.push(note_content.toString());
    }

    /**
     * function listNotes()
     * function to list notes by a particular author  
     */
    listNotes() {
        for (let i=0; i < this.notes.length; i++){
            console.log("Note ID: " + i);
            console.log(this.notes[i]);
            console.log("By Author " + this.author + '\n');
        }
    }
    
    /** 
     * function to get particular note by ID
     * @param: note_id
    */
    getNoteByID(note_id) {
        if (note_id < this.notes.length) {
            console.log(this.notes[note_id]);
        }
        else console.log("Note ID not found");
    }
    
    /**
     * function to print all notes that contain the specified search string
     * @param: search_text
     */
    search(search_text) {
        for (let i=0; i < this.notes.length; i++){
            if ( this.notes[i].includes(search_text) ) {
                console.log("Showing results for search [" + search_text + "]");
                console.log("Note ID: " + i);
                console.log(this.notes[i]);
                console.log("By Author " + this.author);
            }
        }
    }
    
    /**
     * function to delete a note by its ID
     * @param: note_id
     */
    deleteNoteByID(note_id) {
        if (note_id < this.notes.length) {
            this.notes.splice(note_id, 1);
            console.log("Note deleted.");
        }
        else console.log("Note ID not found.");
    }
    
    /**
     * function to edit a note of specified ID with new content
     * @param: note_id
     */
    edit(note_id, new_content) {
        if (note_id < this.notes.length) {
            this.notes[note_id] = new_content;
        }
        else console.log("Note ID not found.");
    }
}
