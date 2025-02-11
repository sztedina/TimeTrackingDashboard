const container = document.getElementById("container")
const dailyBtn = document.getElementById("daily")
const weeklyBtn = document.getElementById("weekly")
const monthlyBtn = document.getElementById("monthly")

dailyBtn.addEventListener("click", getdaily)
weeklyBtn.addEventListener("click", getweekly)
monthlyBtn.addEventListener("click", getmonthly)

function getdaily() {fetch('/data.json').then((response) => {  
  if(!response.ok) return console.log('Oops! Something went wrong.');
  
  return response.json();
}).then((data) => {
  data.map(e => {
    /* Creating sections */
    const sect = document.createElement("section");
    sect.className = `card ${e.title.toLowerCase()}`;

    /* Creating icon divs */
    const mainImgDiv = document.createElement("div")
    mainImgDiv.className = "card-img"
    sect.appendChild(mainImgDiv)


    /* Creating icons */
    const mainImg = document.createElement("img")
    mainImg.src = `images/icon-${e.title.toLowerCase()}.svg`
    mainImg.alt = `${e.title} icon`
    mainImgDiv.appendChild(mainImg)

   /* Creating data cards */
   const dataDiv = document.createElement("div")
   dataDiv.className = "data-card"
   sect.appendChild(dataDiv)

   /* Creating left div */
   const dataLeft = document.createElement("div")
   dataDiv.appendChild(dataLeft)
    
   /* Creating data title h1 */ 
   const dataTitle = document.createElement("h1")
   dataTitle.innerText = `${e.title}`
   dataLeft.appendChild(dataTitle)

   /* Creating data */
   const dataText = document.createElement("h2")
   dataText.innerText = `${e.timeframes.daily.current}hrs`
   dataLeft.appendChild(dataText)

   /* Creating right div */
   const dataRight = document.createElement("div")
   dataRight.className = "data-card-right"
   dataDiv.appendChild(dataRight)

   /* Creating prevoius element */
   const prevoiusHour = document.createElement("p")
   prevoiusHour.innerText = `Previous - ${e.timeframes.daily.previous}hrs`
   dataRight.appendChild(prevoiusHour)

   /* Creating ellipsis icon */
   const ellipsis = document.createElement("img")
   ellipsis.className = "further"
   ellipsis.src = "images/icon-ellipsis.svg"
   ellipsis.alt = "ellipsis icon"
   dataDiv.appendChild(ellipsis)

  container.appendChild(sect);
  
  });
})};

/* Get weekly data */

function getweekly() {fetch('/data.json').then((response) => {  
  if(!response.ok) return console.log('Oops! Something went wrong.');
  
  return response.json();
}).then((data) => {
  data.map(e => {
    /* Creating sections */
    const sect = document.createElement("section");
    sect.className = `card ${e.title.toLowerCase()}`;

    /* Creating icon divs */
    const mainImgDiv = document.createElement("div")
    mainImgDiv.className = "card-img"
    sect.appendChild(mainImgDiv)


    /* Creating icons */
    const mainImg = document.createElement("img")
    mainImg.src = `images/icon-${e.title.toLowerCase()}.svg`
    mainImg.alt = `${e.title} icon`
    mainImgDiv.appendChild(mainImg)

   /* Creating data cards */
   const dataDiv = document.createElement("div")
   dataDiv.className = "data-card"
   sect.appendChild(dataDiv)

   /* Creating left div */
   const dataLeft = document.createElement("div")
   dataDiv.appendChild(dataLeft)
    
   /* Creating data title h1 */ 
   const dataTitle = document.createElement("h1")
   dataTitle.innerText = `${e.title}`
   dataLeft.appendChild(dataTitle)

   /* Creating data */
   const dataText = document.createElement("h2")
   dataText.innerText = `${e.timeframes.weekly.current}hrs`
   dataLeft.appendChild(dataText)

   /* Creating right div */
   const dataRight = document.createElement("div")
   dataRight.className = "data-card-right"
   dataDiv.appendChild(dataRight)

   /* Creating prevoius element */
   const prevoiusHour = document.createElement("p")
   prevoiusHour.innerText = `Previous - ${e.timeframes.weekly.previous}hrs`
   dataRight.appendChild(prevoiusHour)

   /* Creating ellipsis icon */
   const ellipsis = document.createElement("img")
   ellipsis.className = "further"
   ellipsis.src = "images/icon-ellipsis.svg"
   ellipsis.alt = "ellipsis icon"
   dataDiv.appendChild(ellipsis)

  container.appendChild(sect);
  
  });
})};

/* Get monthly data */
   
function getmonthly() {fetch('/data.json').then((response) => {  
  if(!response.ok) return console.log('Oops! Something went wrong.');
  
  return response.json();
}).then((data) => {
  data.map(e => {
    /* Creating sections */
    const sect = document.createElement("section");
    sect.className = `card ${e.title.toLowerCase()}`;

    /* Creating icon divs */
    const mainImgDiv = document.createElement("div")
    mainImgDiv.className = "card-img"
    sect.appendChild(mainImgDiv)


    /* Creating icons */
    const mainImg = document.createElement("img")
    mainImg.src = `images/icon-${e.title.toLowerCase()}.svg`
    mainImg.alt = `${e.title} icon`
    mainImgDiv.appendChild(mainImg)

   /* Creating data cards */
   const dataDiv = document.createElement("div")
   dataDiv.className = "data-card"
   sect.appendChild(dataDiv)

   /* Creating left div */
   const dataLeft = document.createElement("div")
   dataDiv.appendChild(dataLeft)
    
   /* Creating data title h1 */ 
   const dataTitle = document.createElement("h1")
   dataTitle.innerText = `${e.title}`
   dataLeft.appendChild(dataTitle)

   /* Creating data */
   const dataText = document.createElement("h2")
   dataText.innerText = `${e.timeframes.monthly.current}hrs`
   dataLeft.appendChild(dataText)

   /* Creating right div */
   const dataRight = document.createElement("div")
   dataRight.className = "data-card-right"
   dataDiv.appendChild(dataRight)

   /* Creating prevoius element */
   const prevoiusHour = document.createElement("p")
   prevoiusHour.innerText = `Previous - ${e.timeframes.monthly.previous}hrs`
   dataRight.appendChild(prevoiusHour)

   /* Creating ellipsis icon */
   const ellipsis = document.createElement("img")
   ellipsis.className = "further"
   ellipsis.src = "images/icon-ellipsis.svg"
   ellipsis.alt = "ellipsis icon"
   dataDiv.appendChild(ellipsis)

  container.appendChild(sect);
  
  });
})};
        

   
    
