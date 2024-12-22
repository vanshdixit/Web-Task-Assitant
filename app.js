let cont = document.querySelector('.cont');
let landing = document.querySelector('.landing');
let line = document.querySelector('.line');
let line2 = document.querySelector('.line2');
setTimeout(() => {
    document.body.style.backgroundColor = 'black';
    cont.style.display = 'block';
    landing.style.display = 'none';
    line.style.display = 'none';
    line2.style.display = 'none';
}, 5000);
showNotes();
let clock = document.getElementById('clock');
let today = new Date();
clock.style.marginLeft = '1010px'
clock.style.marginTop = '-41px'


setInterval(()=>{
    let today = new Date();
    let clday = today.getDay();
    let cldate = today.getDate();
    let clsec = today.getSeconds();
    let clmin = today.getMinutes();
    let clhours = today.getHours();
    let clyear = today.getFullYear();
    let identifier = '';
    if(clday == 0){
        clday = 'Sunday';  
    }
    else if(clday == 1){
        clday = 'Monday';
    }
    else if(clday == 2){
        clday = 'Tuesday';
    }
    else if(clday == 3){
        clday = 'Wednesday';
        clock.style.color = 'grey'
    }
    else if(clday == 4){
        clday = 'Thursday';
    }
    else if(clday == 5){
        clday = 'Friday';
    }
    else if(clday == 6){
        clday = 'Saturday';
    }

    if(clhours == 13){
        clhours = 1;
        identifier = 'PM'
    }
    else if(clhours == 14){
        clhours = 2;
        identifier = 'PM'
    }
    else if(clhours == 15){
        clhours = 3;
        identifier = 'PM'
    }
    else if(clhours == 16){
        clhours = 4;
        identifier = 'PM'
    }
    else if(clhours == 17){
        clhours = 5;
        identifier = 'PM'
    }
    else if(clhours == 18){
        clhours = 6;
        identifier = 'PM'
    }
    else if(clhours == 19){
        clhours = 7;
        identifier = 'PM'
    }
    else if(clhours == 20){
        clhours = 8;
        identifier = 'PM'
    }
    else if(clhours == 21){
        clhours = 9;
        identifier = 'PM'
    }
    else if(clhours == 22){
        clhours = 10;
        identifier = 'PM'
    }
    else if(clhours == 23){
        clhours = 11;
        identifier = 'PM'
    }
    else if(clhours == 24){
        clhours = 12;
        identifier = 'PM'
    }
    else{
        identifier = 'AM'
    }

    if(clsec <= 30){
        clock.style.color = 'white'
    }
    clock.innerHTML = `${clday}, ${clhours} : ${clmin} : ${clsec} ${identifier}`;
})

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addtitle = document.getElementById('addtitle');
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let time = new Date();
    let date = time.getDate();
    let hours = time.getHours();
    let year = time.getFullYear();
    let day = time.getDay();
    if(day == 0){
        day = 'Sunday';  
    }
    else if(day == 1){
        day = 'Monday';
    }
    else if(day == 2){
        day = 'Tuesday';
    }
    else if(day == 3){
        day = 'Wednesday';
    }
    else if(day == 4){
        day = 'Thursday';
    }
    else if(day == 5){
        day = 'Friday';
    }
    else if(day == 6){
        day = 'Saturday';
    }
    let fullObj = {
        title: addtitle.value,
        text: addTxt.value,
        time: time,
        date: date,
        sec: sec,
        min: min,
        hours: hours,
        year: year,
        day: day
    }
    notesObj.push(fullObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtitle.value = "";
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                
                <div class="noteCard my-2 mx-2 card bg-dark" style="width: 18rem;">
                        <div class="card-body">
                            <span class="card-text" id="timestamp">${element.day}, ${element.hours} : ${element.min} : ${element.sec}, ${element.year}</span>
                            <hr>
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.text}</p>
                            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete This Note</button>
                            <button id="${index}" onclick="viewNote(this.id)" class="btn btn-danger my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">View full Note</button>
                            
                        </div>
                </div>
                
                `});

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `There are no Bluenotes to display here boss, use the "Add a note" section above to add a Bluenote.`
    }
}

// function viewNote() {
//     let work = "";
//     notesObj.forEach(function(element){
//         work = `
//                 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div class="modal-dialog modal-dialog-centered">
//                     <div class="modal-content">
//                     <div class="modal-header">
//                         <h5 class="modal-title text-dark" id="exampleModalLabel">${element.title}</h5>
//                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable text-dark">
//                     ${element.text}
//                     </div>
//                     <div class="modal-footer">
//                         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                         <button type="button" class="btn btn-primary">Save changes</button>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//                 `
//     })
//     let viewnote = document.getElementById('viewnote');
//     if (notesObj.length != 0) {
//         viewnote.innerHTML = work;
//     }
// }


function deleteNote(index) {
    console.log('Deleting Note ', index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }


    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

// let search = document.getElementById('searchText');
// search.addEventListener('input', function () {
//     let searchVal = search.value;
//     // console.log(searchVal);
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function (element) {
//         let cardTxt = element.getElementsByTagName('p')[0].innerText;
//         let cardTxt2 = element.getElementsByTagName('h5')[0].innerText;
//         if (cardTxt.includes(searchVal) || cardTxt2.includes(searchVal)) {
//             element.style.display = 'block';
//         }
//         else {
//             element.style.display = 'none';
//         }
//     })
// })