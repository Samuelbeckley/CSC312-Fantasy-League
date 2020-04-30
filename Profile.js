/**
 * Group 1
 * 
 * File for the Profile class, which contains user information
 * 
 * 4/20/2020
 */
class Profile{
    //Initialize profile
    constructor(){
        this.name = "Test Name";
        this.username = "user1234";
        this.email = "test@gmail.com";
        this.password = "Password!123";
        console.log("Profile: new profile");
    }
    //Return profile name
    get name() {
      return this.name;
    }
    //Return profile username
    get username() {
      return this.username;
    }
    //Return user email
    get email(){
      return this.email;
    }
    //Return user password
    get password(){
      return this.password;
    }
    //Change name
    set name(x){
      this.name = x;
    }
    //Change username
    set username(x){
      this.username = x;
    }
    //Change email
    set email(x){
      this.email = x;
    }
    //Change password
    set password(x){
      this.password = x;
    }
    //Output user information into console
    print(){
        console.log("Name: " + this.name);
        console.log("Username: " + this.username);
        console.log("Email: " + this.email);
        console.log("Password: " + this.password);
    }
}
