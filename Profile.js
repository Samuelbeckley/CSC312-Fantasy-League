// SAM
class Profile{

    constructor(){
        this.name = "Test Name";
        this.username = "user1234";
        this.email = "test@gmail.com";
        this.password = "Password!123";
        console.log("Profile: new profile");
    }
    get name() {
      return this.name;
    }
    get username() {
      return this.username;
    }
    get email(){
      return this.email;
    }
    get password(){
      return this.password;
    }

    set name(x){
      this.name = x;
    }
    set username(x){
      this.username = x;
    }
    set email(x){
      this.email = x;
    }
    set password(x){
      this.password = x;
    }

    print(){
        console.log("Name: " + this.name);
        console.log("Username: " + this.username);
        console.log("Email: " + this.email);
        console.log("Password: " + this.password);
    }
}
