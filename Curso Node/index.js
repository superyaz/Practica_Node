class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Carro {
    constructor(props) {
        this.raza = props;
    }
    getNameRaza() {
        return this.props;
    }

}

const mascota = new Carro("Fresdpuder");
console.log(mascota);

const person = new Person("Yazin");
console.log(person);