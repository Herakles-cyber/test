function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayHi = function () {
    console.log(`Cześć, jestem ${this.name}.`);
}

Person.prototype.showAge = function () {
    console.log(`Mam ${this.age} lata.`);
}


const person1 = new Person('Agnieszka', 24)
person1.sayHi()
person1.showAge()
// tak robiło się do tej pory teraz mamy coś takiego jak klasy i ponieżej jest zademonstrowane jak ma to wyglądać i działa taksamo
// ====================

class Person2 {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    // tak zapisujemy sobie konstruktor nowszym sposobem

    sayHi(){
        console.log(`Cześć, jestem ${this.name}.`);
    }
    // zamist odwoływac się do konstruktora potem do protoype to odrazu możemy odwołać się do naszej metody
    // zdecydowanie lepiej używac takiego zapisu

    showAge = function () {
        console.log(`Mam ${this.age} lata.`);
    }
    // tak też możemy zapisać lecz zapis powyżej jest nowszy i łatwiejszy
    // przy tym zapisie funkcje pokazuje nam w consoli w obiekcie a nie w zakładce prototype więc to jest następny dowód na to by używać zapisu z linijki 28 bo tak to funkcja showAge nie jest przypisana do prototype tylko zamieszczona jest w bezpośrednio w Person2
}

const person2 = new Person2('Ania', 33)

person2.sayHi()
person2.showAge()
// teraz konstruktory zapisuje się za pomocą klas jest to łatwiejsze i czytelniejsze nie mieszamy w ten sposób konstruktorów z funkcjami jak w sposobie powyżej

console.log(person2);