class Stock{
    constructor(name, value) {
        this.name = name;
        this.value = value;
        console.log("Creating stock.");
    }
    
    getValue(){
        return this.value;
        // request most recent price as held in database
    }
    
    getName(){
        //get full name using the abbreviation 
        console.log("Retrieving" + stockAbr + "full name")
        return this.name;
    }
    
    updateValue(){
        //change value to new value"
        console.log("Stock: " + stockAbr + "value updated")
    }
}
