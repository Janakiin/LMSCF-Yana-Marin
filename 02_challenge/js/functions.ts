let personArray = [];

class Person {
  id: number
  name: string;
  age: number;
  phrase: string;
  photo: string;
  location: string;
  hobbies: string;
  favorite_music: string;

  constructor(a, b, c, d, e, f, g, h) {
    this.id = a;
    this.name = b;
    this.age = c;
    this.phrase = d;
    this.photo = e;
    this.location = f;
    this.hobbies = g;
    this.favorite_music = h;
  }
}

class Woman extends Person {
  favorite: boolean;

  constructor(id, name, age, phrase, photo, location, hobbies, favorite_music, favorite) {
    super(id, name, age, phrase, photo, location, hobbies, favorite_music);
    this.favorite = favorite;
    personArray.push(this);
  }
  personInfo() {
    return `
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absolute">
              <img src="img/heart-${this.favorite}.png" onclick="addFavorite(${this.id})" class="img-fluid peopleHeart">
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">${this.phrase}</p>
          </div>
        </div>
      </div>
    `;
  }
  personDetails() {
    return `
      <div class="col-lg-6 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absolute">
              <img src="img/heart-${this.favorite}.png" onclick="addFavorite(${this.id})" class="img-fluid favoritesHeart">
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Name: ${this.name}</h4>
            <p class="card-text">Age: ${this.age}</p>
            <p class="card-text">Location: ${this.location}</p>
            <p class="card-text">Hobbies: ${this.hobbies}</p>
            <p class="card-text">Favorite Music: ${this.favorite_music}</p>
          </div>
        </div>
      </div>
    `;
  }
}

class Man extends Person {
  favorite: boolean;

  constructor(id, name, age, phrase, photo, location, hobbies, favorite_music, favorite) {
    super(id, name, age, phrase, photo, location, hobbies, favorite_music, );
    this.favorite = favorite;
    personArray.push(this);
  }

  personInfo() {
    return `
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absolute">
              <img src="img/heart-${this.favorite}.png" onclick="addFavorite(${this.id})" class="img-fluid peopleHeart">
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">${this.phrase}</p>
          </div>
        </div>
      </div>
    `;
  };

  personDetails() {
    return `
      <div class="col-lg-6 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absolute">
              <img src="img/heart-${this.favorite}.png" onclick="addFavorite(${this.id})" class="img-fluid favoritesHeart">
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Name: ${this.name}</h4>
            <p class="card-text">Age: ${this.age}</p>
            <p class="card-text">Location: ${this.location}</p>
            <p class="card-text">Hobbies: ${this.hobbies}</p>
            <p class="card-text">Favorite Music: ${this.favorite_music}</p>
          </div>
        </div>
      </div>
    `;
  };
};

let daryl  = new Man(0, 'Daryl ', 30, 'Driving fast on the highway', 'img/1m.jpg', 'Graz', 'Movies, concerts, swimming', 'Queen, Radiohead, Elton John', false );
let vicky = new Woman(1, 'Vicky', 24, 'I like walks in the forest.', 'img/1f.jpg', 'Vienna', 'Jogging, reading, traveling', 'Bach, Beethoven, Wagner', false );
let wayne = new Man(2, 'Wayne', 22, 'I\'m selfish, impatient and a little insecure.', 'img/2m.jpg', 'Salzburg', 'Knitting, Crocheting, Holiday Crafts', 'Daftpunk, Kraftwerk, Yello', false );
let shelly = new Woman(3, 'Shelly', 27, 'You\'ve gotta dance like there\'s nobody watching.', 'img/2f.jpg', 'Paris', 'Quilting, Paper Crafts, Collecting badges', 'DJ Ötzi, Andreas Gabalier, Helene Fischer', false );
let jayson  = new Man(4, 'Jayson', 29, 'You only live once, but if you do it right, once is enough.', 'img/3m.jpg', 'Düsseldorf', 'Holiday Crafts, Sewing, Quilting', 'Imagine dragons, Juli, Oomph!', false );
let ada = new Woman(5, 'Ada', 27, 'It does not do to dwell on dreams and forget to live.', 'img/3f.jpg', 'Berlin', 'Jogging, reading, traveling', 'Bach, Beethoven, Wagner', false );
let john = new Man(6, 'John', 22, 'Insane means fewer cameras!.', 'img/4m.jpg', 'Salzburg', 'Knitting, Crocheting, Holiday Crafts', 'Panic at the Disco, Classics, Beatles', false );
let elma = new Woman(7, 'Elma', 31, 'Act first, explain later.', 'img/4f.jpg', 'Paris', 'Cycling, Crafts, Reading', 'Queen, Imagine dragons, Juli', false );

function generatePeople() {
  let peopleContent: string = '';

  for (let tempID in personArray) {
    peopleContent += personArray[tempID].personInfo();
  };

  $('#personContainer').replaceWith(`<div class="row text-center mt-5" id="personContainer">${peopleContent}</div>`);
};

function addFavorite(id) {
  if (personArray[id].favorite == false) {
    personArray[id].favorite = true;
    generatePeople();
    generateFavorites() 
  } else if (personArray[id].favorite == true) {
    personArray[id].favorite = false;
    generatePeople();
    generateFavorites() 
  };
};

function generateFavorites() {
  let favoriteContent: string = '';
  for (let tempID in personArray) {
    if (personArray[tempID].favorite == true) {
      favoriteContent += personArray[tempID].personDetails();
    }
  };
  $('#favoritesContainer').replaceWith(`<div class="row text-center py-2" id="favoritesContainer">${favoriteContent}</div>`);
}





