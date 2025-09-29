function Animal(type, sound) {
  this.type = type;
  this.sound = sound;
}

Animal.prototype.makeSound = function () {
  console.log(`The ${this.type} goes "${this.sound}"`);
};

function Dog(type, sound, breed) {
  Animal.call(this, type, sound);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.fetch = function () {
  console.log(`The ${this.breed} dog is fetching the ball!`);
};

var d1 = new Dog("Dog", "Woof", "German Shepherd");

d1.makeSound();
d1.fetch();
