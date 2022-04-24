class Controller {
    constructor(fname, lname, age, slogan) {
      this.model = new User(fname, lname, age, slogan);
    }
  }
  
  class User{
    slogan = "We love our users";
    constructor(fname, lname, age, slogan) {
      this.firstName = fname;
      this.lastName = lname;
      this.age = age;
      this.bio = function(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old.` ;
      }
      this.bioSlogan = this.bio() + " And as always " + `"${slogan || this.slogan}"`;
    }
  }
  const user1 = new Controller("Bruce", "Wayne", 47, "I am vengance - I am the NIGHT - I. AM. BATMAN.");
  // console.log(user1.model.bio());
  console.log(user1.model.bioSlogan);