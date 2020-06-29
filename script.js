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

// keep track of current slide
let activeSlide = 0;

const slides = [];


// loop through people and make a div.slide and push to slides
function createSlides() {
  people.forEach( (person, index) => {
    const div = document.createElement('div');
    div.classList.add('slide');
    div.innerHTML =
      `
        <div class="profile-container">
        <img class="profile-photo" src="${person.image}" alt="" />
        <div class="nav-container">
          <button class="nav-btn prev" onclick="prevSlide()"><img src="images/icon-prev.svg" alt="Prev"/></button>
        <button class="nav-btn next" onclick="nextSlide()"><img src="images/icon-next.svg" alt="Next"/></button>
        </div>
        
      </div>
    
      <div class="text-container">
        <p>${person.quote}</p>
    
        <p><span class="name">${person.name}</span> <span class="job-title">${person.jobTitle}</span></p>
      </div>
        `
    slides.push(div)
  })

  // addToDOM()
}

// createSlides()
addToDOM()

// apply hide class to every slide that is NOT index of [0]
function addToDOM() {
  createSlides()
  slides.forEach( (slide, index) => {
    document.body.appendChild(slide)
    if (index !== 0) {
      slide.classList.add('hide')
    }
  })
}


function prevSlide () {
  slides[activeSlide].classList.add('hide')

  activeSlide = activeSlide - 1;

  if(activeSlide === -1) {
    activeSlide = slides.length - 1;
  }

  slides[activeSlide].classList.remove('hide') 
}

function nextSlide () {
  slides[activeSlide].classList.add('hide');

  activeSlide = activeSlide + 1;

  if(slides.length - 1 < activeSlide) {
    activeSlide = 0;
  }

  slides[activeSlide].classList.remove('hide');
}
