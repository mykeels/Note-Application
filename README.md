# Note-Application

New Repository to be worked on by Mykeels and AllenGBlack

###Application for taking and keeping notes

###This aplication implements a simple note taking application. The functions are:

- The `constructor()` that sets the parameter 'author' as the author of the note and saves this as an instance variable and create a notes list/array to store all the notes as an instance property.
- `create(note_content)` - This function takes the note content as the parameter and creates a new note which it adds to the notes list of the object as a string.
- `listNotes()` - This function lists out each of the notes in the notes list for the note author.
- `getNoteByID(note_id)` - This function takes a _*note_id*_ which refers to the index of the note in the notes list and returns the content of that note as a string.
- `search(search_text)` - This function take a search string, _*search_text*_ and returns all the notes with that text within it in the following format
- `deleteNoteByID(note_id)` - This function deletes the note at the index _*note_id*_ of the notes list.
- `edit(note_id, new_content)` - This function replaces the content in the note at _*note_id*_ with _*new_content*_.
