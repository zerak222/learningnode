// const square = function(x){
//     return x*x;
// }

// const square = (x)=>{return x*x};

// const square = (x)=>x*x;
// console.log(square(6));


const customEvent = {
    name : 'Marriage',
    guestList : ['Jane','Jake','Jill'],
    printGuestList(){
        console.log('GuestList for '+this.name);

        this.guestList.forEach((guest)=>{
            console.log(guest+' is attending '+this.name);
        });


    }


}
customEvent.printGuestList();
