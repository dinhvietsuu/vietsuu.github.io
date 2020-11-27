const reviews = [
    {
        id:1,
        name:"susan hi",
        job:"PHP develop",
        img:"/img/2.jpg",
        text:"my name is suuu haihfhewhfewheghegegbehgergeg",
    },
    {
        id:2,
        name:"susansuu hi",
        job:"js develop",
        img:"/img/3.jpg",
        text:"my name is suuu ,Im a developer 0 exp",
    },
    {
        id:3,
        name:"sthoi",
        job:"html develop",
        img:"/img/2.jpg",
        text:"my name is suuu haihfhewhfewheghegegbehgergeg",
    },
    {
        id:4,
        name:"vu thi ",
        job:"andriod develop",
        img:"/img/3.jpg",
        text:"my name is suuu , tho's mylove oke bae yeah yeah ",
    }
];

let img = document.getElementById('img');
let author = document.getElementById('author');
let job = document.getElementById('job');
let info = document.getElementById('info');
let btnleft = document.getElementById('btn-left');
let btnright = document.getElementById('btn-right');
let subRandom = document.querySelector('.random');
let index = 0;
btnright.addEventListener('click',function(){
   index++;
   if(index > reviews.length - 1){
       index = 0;
   }
   
})

btnleft.addEventListener('click',function(){
    
    index--;
    if(index < 0 ){
        index = reviews.length-1;
    }
    showPerson(); 
})
function showPerson(){
    img.src = reviews[index].img;
    author.textContent = reviews[index].name;
    job.textContent = reviews[index].job; 
    info.textContent = reviews[index].text;
}
subRandom.addEventListener('click',function(){
   index = random();
  console.log(index);
   showPerson();


})

function random(){
    return Math.floor(Math.random() * reviews.length);
}
