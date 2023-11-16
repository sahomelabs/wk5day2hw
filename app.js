// Menu data structure
// Task 1.0
// Select and cache the <main>element in a variable named mainEl.
var mainEl = document.querySelector('main');

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';


// Task 1.3
// Add a class of flex-ctrto mainEl.
mainEl.classList.add('flex-ctr');


// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl
var topMenuEl = document.getElementById('top-menu');


// Task 2.1
// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = "100%";


// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
// Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add('flex-around');


// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:
// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.
// for (let link of menuLinksArray){
//     let newAElement = document.createElement("a");
//     newAElement.href = link.href;
//     newAElement.textContent = link.text;
//     topMenuEl.appendChild(newAElement);
//     }


var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//     for (var i = 0; i < menuLinks.length; i++) {
//         var linkElement = document.createElement('a');
//         linkElement.href = menuLinks[i].href;
//         linkElement.textContext = menuLinks[i].text;
//         topMenuEl.appendChild(linkElement);
// }

menuLinks.forEach(function(link) {
    var linkElement = document.createElement('a');
    linkElement.href = link.href;
    linkElement.textContent = link.text;
    topMenuEl.appendChild(linkElement);
})

// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
var subMenuEl = document.getElementById('sub-menu');

// Task 4.1
// Set the height subMenuElelement to be 100%.
subMenuEl.style.height = '100%';

// Task 4.2
// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');

// Task 4.3
// Add the class of flex-aroundto the subMenuElelement.
subMenuEl.classList.add('flex-around');

// Task 4.4
// Set the CSS positionproperty of subMenuElto the value of absolute.
subMenuEl.style.position = 'absolute';

// Task 4.5
// Set the CSS topproperty of subMenuElto the value of 0.
subMenuEl.style.top = '0';