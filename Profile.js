class Profile{

    constructor(){
        this.name = "Test Name";
        this.username = "user1234";
        this.email = "test@gmail.com";
        this.password = "Password!123";
        console.log("Profile: new profile");
    }

    print(){
        console.log("Name: " + this.name);
        console.log("Username: " + this.username);
        console.log("Email: " + this.email);
        console.log("Password: " + this.password);
    }
}