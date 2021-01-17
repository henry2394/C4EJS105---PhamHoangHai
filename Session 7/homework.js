// 1-d 2-a 3-c 4-b
//2.1
// setInterval(() => {
//     console.log("test set interval")
// }, 2000);

//3.1 no
//3.2 no

//4
// var A = document.getElementsByTagName("li")
// console.log(A[1])

// for(i=0; i<3; i++){
//     console.log(A[i])
// }

//5
// var A = document.getElementsByTagName("div")
// console.log(A[2])

// for(i=0;i<A.length;i++){
//     console.log(A[i])
// }

//6

// var A = document.getElementById("div-01")
// A.remove();

//7
// var bt1 = document.getElementById("button1");
// var bt2 = document.getElementById("button2");
// bt1.addEventListener("click", (e) => {
//     console.log(e.target);
// });
// bt2.addEventListener("click", (e) => {
//     console.log(e.target);
// });

//7.1  in ra the chua nut button do
//7.2
// var input = document.getElementById("input");

// input.addEventListener("keydown", (e) => {
//     console.log(e.key);
// });

// luu lai lich su nhap vao

//8 + 9 
// function A (name,wish){
//     alert(name +' '+ wish)
// }

// A('hai','senior data')

//10
// function A (name,wish){
//     if(wish == null){
//         alert(name +' chua co dieu uoc')
//     } else alert(name + ' '+ wish)
// }

// A('hai')

//11.2
// var readUper = document.getElementById("cau10b")
// console.log(readUper.outerHTML)

//11.3 + 11.4
// var readUper = document.getElementById("cau10b")
// readUper.addEventListener("click", () => { console.log(readUper.outerHTML) })

// var read10a = document.getElementById("cau10a")
// console.log(read10a)

//11.5 + 11.6
// var read10a = document.getElementById("cau10a")
// var read10b = document.getElementById("cau10b")

// read10b.addEventListener("click", () => {
//     console.log(read10a.value)
//     console.log(read10a.value.toUpperCase())
// })

//11.7
// var text = document.getElementById("result_div")
// console.log(text.outerHTML)
// text.innerHTML = text.innerHTML.toUpperCase()

//12
var item = ['Backpack','MiBand watch','Ring'] 

//12.3
// var bai12 = document.getElementById("item_list")
// console.log(bai12.outerHTML)

12.4
var item_list = document.getElementById("item_list")
// console.log(bai12.outerHTML)

var new_item = document.getElementById("new_item")
var add_item = document.getElementById("add_item")
var addButton = '   <button class="remove">Remove</button>'
var list = document.getElementsByClassName("list")

for (i=0;i<item.length;i++){
    console.log(item.length)
    list[i].innerHTML = list[i].innerHTML+ addButton    
}


add_item.addEventListener("click", ()=>{
    item_list.insertAdjacentHTML('afterbegin',`<li class="list">${new_item.value}    <button class="remove">Remove</button></li>`)
    item.push(new_item.value)

    // console.log(item)
})








