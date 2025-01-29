// Calling all the variables so they have a global scope immediately
let noteArray = [];
let noteName; 
let noteContent = $(".note");
let noteIndex;
let listItem;
let storageLocal = [];
let noteObject = {
    title: noteName,
    noteText: document.querySelector(".note").value
};

//Add button event listener that creates a list item with the prompt giving the title
$(".add-btn").on("click", function () {
    noteName = prompt("Name your Note", "New note");
    if(noteName != null){
        noteObject = {
            title: noteName,
            noteText: document.querySelector(".note").value
        };
        console.log(noteObject.title); 
        noteArray.push(noteObject);
        index = noteArray.length -1;
        listItem = `<li  class="note-list-item index${index}">${noteArray[index].title}</li>`
        $("#list").append(listItem);

    }
       
});

//Open Note by clicking on the title of the note in the list
$("#list").on("click", ".note-list-item", function (event) {
    console.log(event);
    console.log(event.target.innerHTML);
    console.log($(this).index());
    noteIndex = $(this).index();

    $(noteContent).html(`
        <div class="note-grid">
        <div class ="note-flex">
        <div class="note-title">
            <input id="note-title">
        </div>
        <div class="text-box">
            <textarea class="note-text"></textarea>
        </div>    
            <div class="button-section">
            <div id="save-btn" class="button">Save</div>
            <div id="clear-btn" class="button">Clear${noteIndex}</div>
            <div id="delete-btn" class="button">Delete</div>
        </div>
        </div>
        </div>`);
    $("#note-title").val(noteArray[noteIndex].title);

        $(".note-text").val(noteArray[noteIndex].noteText);
    
    

});

//Save note content to LocalStorage (or SessionStorage)
$(".note").on("click", "#save-btn",function () {
    noteArray[noteIndex].title = $("#note-title").val();
    listItem = `<li class="note-list-item index${noteIndex}">${noteArray[noteIndex].title}</li>`

    $(`.index${noteIndex}`).html(noteArray[noteIndex].title);
    
    

    noteObject = {
        title: noteName,
        noteText: document.querySelector(".note").value
    };

    if(noteArray[noteIndex].noteText === undefined) {
        noteArray[noteIndex].noteText = $(".note-text").val();
    };

    console.log(noteArray[noteIndex].noteText);

    sessionStorage.setItem("NoteStorage", JSON.stringify(noteArray));

    console.log(sessionStorage.getItem("NoteStorage"));

    storageLocal = JSON.parse(sessionStorage.getItem("NoteStorage"));

    
});

// Retrive note data from Local Storage 
$(document).ready(function () {
    storageLocal = JSON.parse(sessionStorage.getItem("NoteStorage"));
    console.log(storageLocal)
    if(storageLocal.length != 0) {
        console.log(sessionStorage.getItem("NoteStorage"))
        
        storageLocal.forEach((element, index) => {
            console.log(element);
            console.log(index);

            listItem = `<li  class="note-list-item index${index}">${element.title}</li>`
            $("#list").append(listItem);

        });
    
        noteArray = storageLocal;
    }    
  
});

//Delete Storage
$(".note").on("click","#delete-btn", function () {
    storageLocal = JSON.parse(sessionStorage.getItem("NoteStorage"));

    storageLocal.splice(noteIndex, 1);
    // Refreshing the page to see the changes on the DOM
    location.replace(location.href);

    sessionStorage.setItem("NoteStorage", JSON.stringify(storageLocal));
});

//Clears the text from the text area

$(".note").on("click","#clear-btn", function () {
    $(".note-text").val("");
});

$(document).ready(function () {
    $("#search").on("input", function () {
        let searchVal = $(this).val().toLowerCase();
        console.log($(this).val().toLowerCase());
        $(".note-list-item").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchVal) > -1)
            
        });
       
    });
});
