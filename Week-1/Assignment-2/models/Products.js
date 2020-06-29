const items = [
    {id:1, name:'Soap', price:10},
    {id:2, name:'Tooth Paste', price:20},
    {id:3, name:'Ice Cream', price:30}
]

const billingAmount = function(dateItems){
    let sum=0;
    for(let i=0;i<dateItems.length;i++){
        sum += dateItems[i].qty * dateItems[i].price;
    }
    return sum;
}

const searchById =function(value, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id == value) {
            return myArray[i];
        }
    }
}

const getPrice = function(id){
    var resultObject = searchById(id, items);
    if(resultObject != null)
    {
        return resultObject.price;
    }
    else{
        return 0 ;
    }
}

module.exports = {
    items : items,
    billingAmount : billingAmount,
    getPrice : getPrice
}