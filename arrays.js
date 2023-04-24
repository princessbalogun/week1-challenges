let favSongs = [
    "take me to the king- pamela",
    "no gray - emma",
    "thank you - victor"
]

//print array
console.log(favSongs)
//updating an item
favSongs[1] = "this year - victor"
//printing item at specific index
console.log(favSongs[1])

//task1
// Create an array of favorite films
let favoriteFilms = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'Inception'];

// Add two more films to the array
favoriteFilms.push('The Matrix', 'Forrest Gump');

// Loop through the array and log each film to the console
for (let i = 0; i < favoriteFilms.length; i++) {
  console.log(favoriteFilms[i]);
}


//task2
// Generate 6 random numbers between 1-50
for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    console.log(randomNumber);
  }


//task3
// Count from 9 to 0 and log to the console
for (let i = 9; i >= 0; i--) {
    console.log(i);
  }

  

//task4
// Define an array of films
let films = ['The Godfather', 'The Shawshank Redemption', 'Ghostbusters', 'Pulp Fiction'];

// Loop through the array and display each film
for (let i = 0; i < films.length; i++) {
  console.log(films[i]);
}

// Check if the 3rd film is Ghostbusters
if (films[2] === 'Ghostbusters') {
  console.log('Yay it\'s Ghostbusters');
} else {
  console.log('Boo! we want Ghostbusters!');
}



//task5
// Generate 6 random numbers between 1 and 30
for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 30) + 1;
    
    // Check if the number is divisible by 7
    if (randomNumber % 7 === 0) {
      console.log(randomNumber + ' is divisible by 7');
    } else {
      console.log(randomNumber + ' is not divisible by 7');
    }
  }

  

  //task6
  // Create two arrays of followers
let bobsFollowers = ['Alice', 'Bob', 'Charlie', 'Dave'];
let hannahsFollowers = ['Charlie', 'Dave', 'Eve', 'Frank'];

// Find mutual followers using nested loops
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < hannahsFollowers.length; j++) {
    if (bobsFollowers[i] === hannahsFollowers[j]) {
      console.log(bobsFollowers[i] + ' is a mutual follower!');
    }
  }
}

