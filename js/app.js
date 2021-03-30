'use strict'

let form = document.getElementById('formy');
let rightSection = document.getElementById('rightSection');
let img =document.getElementById('img');

let info = [];
function Author(artificalTitle, img, author, dated, datem, datey, likes,subject, content) {
    this.artificalTitle = artificalTitle;
    this.img = img;
    this.author = author;
    this.dated = dated;
    this.datem = datem;
    this.datey = datey;
    this.likes = likes;
    this.subject=subject;
    this.content = content;
    info.push(this);
    localStorage.setItem('info' ,info )
}

form.addEventListener('submit', addHandler);
function addHandler(event) {
    event.preventDefault();

    let artificalTitle = event.target.Articaltitle.value;
    let img = 'm';
    let authorname = event.target.authorName.value;
    let dated = event.target.day.value;
    let datem = event.target.month.value;
    let datey = event.target.year.value;
    
    let likes = getRandomInt();
    let subject = event.target.subject.value;
    let content = event.target.content.value;

    let submit = new Author(artificalTitle, img, authorname,  dated,datem,datey, parseInt( likes),subject ,content);

    render();
}





function render() {
    rightSection.innerHTML='';
    for (let i = 0; i < info.length; i++) {
        let artificalTitle = document.createElement('p');
        artificalTitle.innerHTML = info[0].artificalTitle;
        rightSection.appendChild(artificalTitle);

        let img = document.createElement('img');
        img.src ="asac_ltuc.jpg"
        img.innerHTML = info[0].img;
        rightSection.appendChild(img);

        let author = document.createElement('p');
        author.innerHTML = info[0].author;
        rightSection.appendChild(author);

        let dated=document.createElement('p');
        dated.innerHTML=info[0].dated;
        rightSection.appendChild(dated);


        
        let datem=document.createElement('p');
        datem.innerHTML=info[0].datem;
        rightSection.appendChild(datem);


        
        let datey=document.createElement('p');
        datey.innerHTML=info[0].datey;
        rightSection.appendChild(datey);

        let likes = document.createElement('p');
        likes.innerHTML=info[0].likes;
        rightSection.appendChild(likes);

        let subject = document.createElement('p');
        likes.innerHTML=info[0].subject;
        rightSection.appendChild(subject);

        let content = document.createElement('p');
        content.innerHTML=info[0].content;
        rightSection.appendChild(content);

    }

}


function getRandomInt() {
    Math.floor(Math.random() * 500) + 1;
}