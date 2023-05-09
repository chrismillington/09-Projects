class item{
    constructor(itemName,itemDescription,itemPrice,itemImage){
    this.name = itemName;
    this.description = itemDescription;
    this.price = itemPrice;
    this.image = itemImage;
    this.purchased = false;
    this.serial;
    this.saleID;
    }
}
class stock{
    itemsInStock = 0
    items = [];
    getSerial(){
        let x = this.itemsInStock;
        this.itemsInStock++;
        return x;
    }
    addItem(object){
        object.serial = this.getSerial()
        this.items.push(object);
    }
    purchase(ID,code){
        
    }
    display(){
        for(let x =0;x<this.items.length;x++){
            console.log(this.items[x])
        }
    }
}
let db = new stock();
function startup(){
    db.addItem(new item("Dog","Central Intelligence Agency",79,"pic"));
    db.addItem(new item("Cat","MI6",52,"image"));
    db.addItem(new item("Bear","FSB",17,"he"));
    db.addItem(new item("Wolf","SAS",111,"who"));
    db.addItem(new item("US","Delta",94,"dares"));
    db.addItem(new item("Navy","Seals",63,"wins"));

}
startup();

  