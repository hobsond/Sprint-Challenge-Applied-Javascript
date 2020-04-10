// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container



function Header(newdate,title,temp) {
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')
    
    const date = document.createElement('span')
    date.classList.add('date')
    date.textContent = newdate;

    const h1 = document.createElement('h1')
    h1.textContent = title


    const tempature = document.createElement('span')
    tempature.classList.add('temp')
    tempature.textContent = temp


    
    headerDiv.append(date)
    headerDiv.append(h1)
    headerDiv.append(tempature)

    const headeContainer = document.querySelector('.header-container')
    headeContainer.appendChild(headerDiv)

}
Header('April 10', 'Lambda Times', '98°')
