/* $(document).ready(function () {
   
    console.log("ready file")

    let noteTitle = document.querySelector("#note-title").value;
    let noteValue;
    let noteOne;

    const noteObj = 
    {
        title: document.querySelector("#note-title").value,
        textValue: document.querySelector("#text").value
    };


$(".save-btn").on("click", function () {
    
    noteValue = document.querySelector("#text").value;
    console.log(noteValue);
    noteOne = noteValue;
    console.log(JSON.stringify(noteObj));
    return noteOne;
    
});

$(".clear-btn").on("click", function () {
    document.querySelector("#text").value = "";
});

$(".show-btn").on("click", function () {
     document.querySelector("#text").value = noteOne;
     console.log(noteValue);
});



$("#note-title").on("input", function () {
    noteTitle = document.querySelector("#note-title").value;
    let noteName = $("h1");

    if(noteTitle.length > 0) {
        noteName.html(noteTitle);
    } else {
        noteName.text("Note App - Appgol");
    }
    console.log(noteTitle);
    console.log(noteTitle.length);
});
    
});

 */