console.log("start");

const data = [
  {
    name: "Jessica",
    age: 30,
    city: "Moscow",
    language: "Python",
    framework: "Djengo",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
  },
  {
    name: "Hollie",
    age: 23,
    city: "NewYork",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    name: "Kathline",
    age: 26,
    city: "Paris",

    language: "Php",
    framework: "Laravel",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "james",
    age: 32,
    city: "Lisbon",
    language: "Php",
    framework: "Symphony",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

let persons = cvIterator(data);

nextCv();
const next = document.getElementById("next");
next.addEventListener("click", nextCv);

function nextCv() {
  const currentPerson = persons.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentPerson != undefined) {
  image.innerHTML = `<img src="${currentPerson.image}" >`;
  profile.innerHTML = `<ul class="list-group">
  <li class="list-group-item">${currentPerson.name}</li>
  <li class="list-group-item">${currentPerson.age}</li>
  <li class="list-group-item">${currentPerson.city}</li>
  <li class="list-group-item">${currentPerson.language}</li>
  <li class="list-group-item">${currentPerson.framework}</li>
</ul>`}
else {
  alert('End of profiles');
  window.location.reload();
}
}
