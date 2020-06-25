// store each person in objects X
// make function to create slides X
// add forEach loop into slides function X
// for each slide made push onto an array to keep track of shown slide and hidden slide X
// when slide is slides[0] display in DOM. when slide is any other in array, add hide class to div.slide X
// remove and add hide class to slides
// create functions for eventListeners on prev and next buttons to add hide and remove hide class




const prev = document.getElementById('prev');
const next = document.getElementById('next');

const people = [{
    quote: ' " ' + "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future." + ' " ',
    name: "Tanya Sinclair",
    jobTitle: "UX Engineer",
    image: "images/image-tanya.jpg"
  },
  {
    quote: ' " ' + "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. " + ' " ',
    name: "John Tarkpor Junior ",
    jobTitle: "Front End Developer",
    image: "images/image-john.jpg"
  },
  {
    quote: ' " ' + " Dis course is nice but no teach how to hunt buggos" + ' " ',
    name: "Cheese",
    jobTitle: "Buggo Hunter",
    image: "images/cheese.jpeg"
  }
]

const slides = [];


// loop through people and make a div.slide and push to slides
function createSlides() {
  people.forEach(person => {
    const div = document.createElement('div');
    div.classList.add('slide');
    div.innerHTML =
      `
        <div class="profile-container">
        <img class="profile-photo" src="${person.image}" alt="" />
        <div class="nav-container">
          <button id="prev" class="nav-btn prev"><img src="images/icon-prev.svg" alt="Prev"/></button>
        <button id="next" class="nav-btn next"><img src="images/icon-next.svg" alt="Next"/></button>
        </div>
        
      </div>
    
      <div class="text-container">
        <p>${person.quote}</p>
    
        <p><span class="name">${person.name}</span> <span class="job-title">${person.jobTitle}</span></p>
      </div>
        `
    slides.push(div)
  })

  addToDOM()
}

createSlides()

// apply hide class to every slide that is NOT index of [0]
function addToDOM() {
  slides.forEach((slide, index) => {
    document.body.appendChild(slide)
    if (index !== 0) {
      slide.classList.add('hide')
    }
  })
}


// if slide is index 0 go to slide -1. this is last slide. if slide is -1 then slide minus 1
// each time classList(hide) needs to be removed 
function prevSlide() {

  if(document.body.querySelectorAll('.slide nth-of-type') === 0 ) {
    classList.add('hide')
  }


  // document.body.querySelectorAll('.slide').forEach(slide => {
  //   if (slide === document.body.querySelector('.slide' div:nth-child(1) )) {
  //     slide.style.border = "5px solid green";
  //   }
  // })

}

// if slide is index 0 go to slide[1]. if slide is -1 then go to slide[0]
// each time classList(hide) needs to be removed
function nextSlide() {

}

prevSlide()

document.querySelector('.prev').addEventListener('click', () => console.log('prev'))
document.querySelector('.next').addEventListener('click', () => console.log('next'))