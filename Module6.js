class Dog {
    constructor(name, sound, family, type){
        this.name = name;
        this.sound = sound;
        this.family = family;
        this.type = type;
    }
describe(){
    document.write("Hello, my name is " + this.name + ".");
    document.write(" When I bark " + this.sound + ". ");
    document.write(" I starred in the tv show " + this.family + ".");
    document.write(" My character was a " + this.type + ".");
    document.write(" I was the family dog in a cartoon about a family in the future.");
    }
}

let Mydog = new Dog ("Astro", "I am not scary", "The Jetsons", "Great Dane");
Mydog.describe();
