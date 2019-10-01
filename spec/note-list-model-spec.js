function testNoteList(){
    try {
        let note1 = new Note();
        let note2 = new Note();
        let noteList = new NoteList();
        noteList.add(note1);
        noteList.add(note2);

        assert.isArrayEqual(noteList.notes , [note1,note2]) ;

    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}


