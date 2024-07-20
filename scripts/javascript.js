//the Event object is passed to any event handler called via an event 
//attribute eg onclick, onsubmit etc

function submit(event){
    //prevents page redirection
    event.preventDefault();
        
    //event target returns the element on which the event is fired upon 
    //ie event.target === myForm
   
    const myForm = event.target;
    const formData = new FormData(myForm);//get form data
    const data = Object.fromEntries(formData);//convert form data to object

    // get the radio button that is checked
    // add the value to the object

    radio = document.querySelector('input[name="console"]:checked').value;
    data.console = radio;
   
    console.log(data);
    alert('submission was successful!');

    //window.location.href = 'database.html';
}
   
let database = [];

//attach the submit function to the submit event of the form    
result = document.getElementById("form");
result.addEventListener('submit', submit);


//document.forms['form'].addEventListener('submit', submit);

// navBar functions
function openBar(){
    const sidebar = document.querySelector('.side-wrapper');
    sidebar.style.display = 'block';
}

function closeBar(){
    const sidebar = document.querySelector('.side-wrapper');
    sidebar.style.display = 'none';
}

//image slider functions
let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
