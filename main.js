// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
function createNew(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

let ul = document.getElementById('people');
let url = 'https://randomuser.me/api/?results=12';
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let people = data.results;
    return people.map(function(people) {
      let li = createNew('li'),
          img = createNew('img'),
          span = createNew('span')
          names = createNew('names')
          emails = createNew('emails');
      img.src = people.picture.medium;
      span.innerHTML = `${people.location.street} ${people.location.city} ${people.location.state} ${people.location.postcode}`;
      names.innerHTML = `${people.name.first} ${people.name.last}`;
      emails.innerHTML = `${people.email}`;
      append(li, img);
      append(li, names);
      append(li, emails);
      append(li, span);
      append(ul, li);
    })
  })
.catch(function(error) {
  console.log(error);
   });


  'use strict';

  // Your Code Goes Here
