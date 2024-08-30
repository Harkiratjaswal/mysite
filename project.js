let div=document.createElement('div');
div.style.height="800px";
div.style.width="100%";
div.style.background="#008080";
div.style.height="border-box";

document.body.appendChild(div);

let h1=document.createElement('h1')
h1.innerHTML="Discussion Portal";
h1.style.color="white";
h1.style.marginLeft="37%";
h1.style.fontSize="50px";
div.appendChild(h1);


let div1=document.createElement('div')
div1.style.height="700px";
div1.style.width="600px";
div1.style.background="#008080";
div1.style.border="1px solid #008080";
div1.style.marginTop="1%";
div.appendChild(div1);


let div2=document.createElement('div')
div2.style.height="700px";
div2.style.width="850px";
div2.style.background="white";
div2.style.border="1px solid #008080";
div2.style.marginTop="1%";
div2.style.marginLeft="42%";
div2.style.marginTop="50%";
div.appendChild(div2);


let h2=document.createElement('h2');
h2.innerHTML="Welcome to discussion portal";
h2.style.color="black";
h2.style.marginTop="3%";
h2.style.fontsize="400px";

let h3=document.createElement('h3');
h3.innerHTML="Enter Subject and Question to get started";
h3.style.color="black";
h3.style.marginLeft="3%";
h3.style.fontsize="15px";

div2.appendChild(h2);
div2.appendChild(h3);

let div3=Document.createElement('div');
div3.style.height="100px";
div3.style.width="600px";
div3.style.background="white";
div1.appendChild(div3);


var a=document.getElementById('create');
a.style.height="50px";
a.style.width="250px";
a.style.marginLeft="3%";
a.style.border="2px solid #008080";
div2.appendChild(a);


var ab=document.getElementById('abc');
ab.style.height="350px";
ab.style.width="650px";
ab.style.marginLeft="3%";
ab.style.border="2px solid #008080";
ab.style.marginTop="20px";
ab.style.display="block";
div2.appendChild(ab);


var ab=document.getElementById('st');
b.style.height="50px";
b.style.width="130px";
b.style.marginLeft="80%";
b.style.border="2px solid #008080";
b.style.color="grey";
b.style.marginTop="20px";
div2.appendChild(b);


var c=document.getElementById('b1');
c.style.height="40px";
c.style.width="180px";
c.style.marginLeft="10px";
c.style.border="2px solid #008080";
c.style.marginTop="20px";
div3.appendChild(c);

var d=document.getElementById('b2');
d.style.height="40px";
d.style.width="180px";
d.style.marginLeft="70px";
d.style.border="2px solid #008080";
d.style.marginTop="20px";
div3.appendChild(d);

let left_div=document.getElementById('a1');
let right_div=document.getElementById('a2');
let input=document.getElementById('create');
let textarea=document.getElementById('abc');
let submit=document.getElementById('st');
let ques=document.getElementById('b1');
submit.addEventListener("click",sub);

function sub(){
    if(input.value!=""&& textarea.value!="")
    {
        let a3=document.createElement('div');
        left_div.appendChild(a3);
        a3.style.backgroundColor="white";
        a3.style.height="100px";
        a3.style.width="100%";

        let heading=document.createElement(h1);
        a3.appendChild(heading);
        para.innerHTML=textarea.value;

        let para=document.createElement('p');
        a3.appendChild(para);
        para.innerHTML=textarea.value;
        input.value="";
        textarea.value="";
    }
    else
    {
        alert(" Please Write Something");
    }
}

































