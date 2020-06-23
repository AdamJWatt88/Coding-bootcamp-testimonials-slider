// store each person in objects
// make function to create DOM
// remove and add hide class to slides
// add forEach loop into addToDOM function
    // loop through people object
// for each slide made push onto an array to keep track of shown slide and hidden slide


const prev = document.getElementById('prev');
const next = document.getElementById('next');

const people = [
    { 
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
    }
]


function addToDOM() {
    const div = document.createElement('div');
    div.classList.add('slide');
    div.innerHTML = people.forEach( person => {
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
    })

    document.body.appendChild(div);

}

addToDOM()

