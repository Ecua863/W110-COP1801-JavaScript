function MyDog(name, breed, family, canTalk) {
    this.name = name;
    this.breed = breed;
    this.family = family;
    this.canTalk = canTalk;
    this.myGreeting = function () {
        if (this.canTalk) {
            return `Hi, I am ${this.name}. I can talk!`;
        } else {
            return `Hi, I am ${this.name}. I cannot talk.`;
        }
    };
}

const brian = new Dog("Brian", "Beagle", "Family Guy", "I can talk");
const scoobyDoo = new Dog("Scooby-Doo", "Great Dane", "Scooby-Doo Where are you", "I cannot talk");

const dogs = [brian, scoobyDoo];

for (const dog of dogs) {
    for (const property in dog) {
        if (typeof dog[property] !== "function") {
            console.log(`${property}: ${dog[property]}`);
        }
    }
}

const dogName = prompt("Enter the dog's name (Brian or Scooby-Doo):");

function findDog(name) {
    return dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
}

const selectedDog = findDog(dogName);

const dogInfoElement = document.getElementById("dogInfo");
const dogGreetingElement = document.getElementById("dogGreeting");

if (selectedDog) {
    let dogInfo = "";
    for (const property in selectedDog) {
        if (typeof selectedDog[property] !== "function") {
            dogInfo += `${property}: ${selectedDog[property]}<br>`;
        }
    }
    dogInfoElement.innerHTML = dogInfo;
    dogGreetingElement.innerHTML = selectedDog.myGreeting();
} else {
    dogInfoElement.innerHTML = "Error: The dog you selected doesn't exist.";
}
