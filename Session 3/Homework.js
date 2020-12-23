/// 1
// let a = 5
// let b = 6
// console.log(a,b)
// let temp = b
// b = a
// a = temp
// console.log(a,b)

// let a = 5, b = 6;
// console.log(a,b);
// [a, b] = [b, a];
// console.log(a,b);

///2
// const s = 'Hello beauty there'
// result = s.split(" ")
// console.log(result)

///3
// const a = [4, 57, -8];
// console.log(...a);

//4 
// let result = ['Jean', 'T-Shirt', 'Sock']
// let ask = prompt("welcome to my shop, what do you want").toUpperCase()

// if (ask == 'R') {
//     for (item of result) {
//         console.log((result.indexOf(item) + 1) + '.' + `${item}`)
//     }
// } if (ask == 'C') {
//     let C = prompt("Enter the name of item")
//     result.push(C)
//     alert('done')
//     console.log(result)
//     let ask2 = prompt("what do you want next").toUpperCase()
//     if (ask2 == 'R') {
//         for (item of result) {
//             console.log((result.indexOf(item) + 1) + '.' + `${item}`)
//         }
//     }
// } if (ask == 'U') {
//     let u = prompt('what position do you want to update')
//     if (Number(u) > 2) {
//         alert("cannot update")
//     }
//     else if (u <= 2) {
//         let kq = prompt('enter the name')
//         result[u] = kq
//         alert('Done')
//         let ask2 = prompt('what you want to do next ?').toUpperCase()
//         if (ask2 == 'R'){
//             for (item of result) {
//                 console.log((result.indexOf(item) + 1) + '.' + `${item}`)}
//         }
//     }
// } if (ask == 'D') {
//     let D = prompt('enter the position you want to delete')
//     if(Number(D) > 2) {
//         alert("It out of range")
//     } else if (Number(D) <= 2) {
//         result.splice(D,1)
//         alert('Done')
//         let ask3 = prompt('what do you want to do next').toUpperCase()
//         if(ask3 == 'R') {
//             for (item of result) {
//                 console.log((result.indexOf(item) + 1) + '.' + `${item}`)}
//         }
//     }
// }   


///5
// let nhapSo = prompt('Nhap so, cach nhau boi dau ,')
// let array = []
// let sum = 0
// array = nhapSo.split(',')
// console.log(array)
// for (item of array) {
//     sum = sum + Number(item)
// }
// alert('the sum is ' + sum )

//6
// let nhapSo = prompt('Nhap so, cach nhau boi dau ,')
// let array = []

// array = nhapSo.split(',')

// alert(Math.min(...array))


//7
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let nhap_so = prompt('nhap so')
// for (item of arr) {
//     if (nhap_so == item) {
//         alert(nhap_so + ' is found in array')
//         break;
//     } if (nhap_so != item) {
//         alert(nhap_so + ' is not found in array')
//         break;
//     }
// }

//8
// let array = [5,7,300,90,24,50,75]
// console.log('This is my sheep sizes')
// console.log(...array)
// console.log('now my biggest sheep has size ' + Math.max(...array))
// let max = Math.max(...array)
// // console.log('affter shearing here is my flock: '+ array.splice(array.indexOf(max)),1)
// array.splice(array.indexOf(max),1)
// console.log('affter shearing here is my flock: '+ array)
// for (i in array) {
//     array[i] = array[i]+ Number(50)
// }
// console.log('1 month has passed, my sheeps have grow, here are their size '+array)
// for (i in array) {
//     array[i] = array[i]+ Number(50)
// }
// console.log('next month has passed, my sheeps have grow, here are their size '+array)
// let sum = 0
// for (item of array) {
//         sum = sum + Number(item)
//     }
// console.log('My flock has size ' +  `${sum}` +'\n\
//             i would get ' + `${sum} *2 = ` + sum*2 )

