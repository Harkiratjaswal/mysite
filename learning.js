let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) =>{
//     console.log("event using js")
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
   
// };


// let div=document.querySelector("#box1");
// div.onmousemove = (evt1) => {
//     console.log(evt1.type);
//     console.log(evt1.target);
//     console.log(evt1.clientX);
//     console.log(evt1.clientY);
// }; 

// console.log("harkirat");
// order(()=>{
//     setTimeout(console.log("order"),2000)
// });
// orderprocessing(()=>{
//     setTimeout(console.log("process"),4000)
// });
// orderdone(()=>{
//     setTimeout(console.log("prepare"),6000)
// });
// console.log("clicked");

// function order(){
//     console.log("mesaage after 2 sec");
// }
// setTimeout(order,2000);

// function orderprocessing(){
//     console.log("oder in processing");
// }
// setTimeout(orderprocessing,4000);
// function orderdone(){
//     console.log("oder is done");
// }
// setTimeout(orderdone,6000);
// console.log("clicked2")

function order(){
        console.log("mesaage after 2 sec");
    }
    setInterval(order,1000);



