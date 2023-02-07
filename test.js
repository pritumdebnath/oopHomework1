// 1
let dog = {
    name: "Panda",
    numLegs: 4
  };

// 2
  let dog = {
    name: "Spot",
    numLegs: 4
  };
  console.log(dog.name);
  console.log(dog.numLegs);

// 3
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs."}
  };
dog.sayLegs();

// 4
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  dog.sayLegs();

// 5
  function Dog() {
    this.name = "Panda";
    this.color = "white";
    this.numLegs = 4;
  }

// 6
  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
let hound = new Dog();

// 7
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let poodle = new Dog("Kirby", "black and gray");
  let terrier = new Dog("Fido", "white");

// 8
  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse = new House(4);
  myHouse instanceof House;

//  9 
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  for (let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }
  console.log(ownProps);

// 10
function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  let beagle = new Dog("Snoopy");