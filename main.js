class Judges {
    constructor (name, surname, role) {
      this.name = name;
      this.surname = surname;
      this.role = role;
    }
 


  showPerson() {
    console.log(`Judge is ${this.name} ${this.surname}`, `${this.role}`);
}
  showPerson2() {
    console.log(`Judge is ${this.name} ${this.surname}`, `${this.role}`);
}
  showPerson3() {
    console.log(`Judge is ${this.name} ${this.surname}`, `${this.role}`);
}
  showPerson4() {
    console.log(`Judge is ${this.name} ${this.surname}`, `${this.role}`);
}
}

const judjes1 = new Judges("Nastia", "Kamenski", "singer");
judjes1.showPerson(); 
const judjes2 = new Judges("Tina", "Karol", "singer");
judjes2.showPerson2(); 
const judjes3 = new Judges("Ksenia", "Mishenana", "actris");
judjes3.showPerson3(); 
const judjes4 = new Judges("Monatik","" , "singer and dancer");
judjes4.showPerson4(); 

