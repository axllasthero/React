class Animal {
    constructor(type = "", age = "", color = "") {
        this.age = age;
        this.color = color;
        this.type = type;

    }

    info() {
        console.log(this.type + " is " + this.color + " and " + this.age + ".");
    }
}

class Dog extends Animal {
    constructor(type, age, color, poroda = "") {
        super(type, age, color, poroda)
        this.poroda = poroda;
    }

    getDog() {
        console.log("It's " + this.poroda);
    }
}

const Ginger = new Dog("dog", "7 year old", "white", "chihuahua")

Ginger.info()
Ginger.getDog()

class Duck extends Animal {
    constructor(type, age, color, razmah = 0) {
        super(type, age, color, razmah)
        this.razmah = razmah;
    }

    getDuck() {
        console.log("Duck's razmah is " + this.razmah + " cm");
    }
}

const Donald = new Duck("duck", "5 year old", "white", 83)

Donald.info()
Donald.getDuck()

class Chipmunk extends Animal {
    constructor(type, age, color, food = "") {
        super(type, age, color, food)
        this.food = food;
    }

    getChipmunk() {
        console.log("Chipmunk eats " + this.food);
    }
}

const Chip = new Chipmunk("chimpunk", "8 month old", "brown", "nuts")

Chip.info()
Chip.getChipmunk()