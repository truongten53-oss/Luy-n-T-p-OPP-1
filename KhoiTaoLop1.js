function Studen(id , name , address) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.getInfor = function (){
        return "Id = " + this.id + "Name = " + this.name + "Address = " + this.address;
    }
}
var studenr = new Studen (1, "Nam" , "Ninhbinh") ;
console.log(studenr.getInfor());


