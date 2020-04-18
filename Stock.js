class Stock{
    constructor(name, value) {
        this.name = name;
        this.value = value;
        console.log("Creating stock.");
    }
    
    getValue(stockAbr){
        return this.value;
        // request most recent price as held in database
    }
    
    getName(stockAbr){
        //get full name using the abbreviation 
        console.log("Retrieving" + stockAbr + "full name")
        return this.name;
    }
    
    updateValue(stockAbr){
        //change value to new value"
        console.log("Stock: " + stockAbr + "value updated")
    }
}
