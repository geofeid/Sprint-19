const user = {
    fname: "empty",
    lname: "empty", 
    age: 0,
    bio: function(newfname, newlname, newage){
      console.log(`first name: ${newfname || this.fname}; last name: ${newlname || this.lname}; age: ${newage || this.age}`)
    }
  }
  
  user.bio("Clark", "Kent", 35)