// var nhapso_vonglap = prompt("Nhap so")


// 3b
// var nhapso_vonglap = prompt("Nhap so")
// for (var i = 0; i < nhapso_vonglap;i++) {
//     console.log(i)
// }

// 3c
// var nhapso_vonglap = prompt("Nhap so")
// for (var i = 3; i < nhapso_vonglap;i++) {
//     console.log(i)
// }

// 3d
// var nhap_so_dau = prompt("Nhap so dau")
// var nhap_so_cuoi = prompt("Nhap so cuoi")


// for (var i = Number(nhap_so_dau); i < Number(nhap_so_cuoi) ; i++) {
//     console.log(i)
// }

// 3f
// var nhap_so_dau = prompt("Nhap so dau")
// var nhap_so_cuoi = prompt("Nhap so cuoi")
// var buoc_nhay = prompt("Buoc nhay")

// for (i =Number(nhap_so_dau); i < Number(nhap_so_cuoi); i+= Number(buoc_nhay)) {
//     console.log(i)
// }

// 4
// var nhap_so = prompt("Nhap so tinh giai thua")
// var ketqua = 1
// for (var i = 1; i <= Number(nhap_so); i++) {
//     ketqua = ketqua * i
// }
// alert("the factory of " + nhap_so + " is: " + ketqua)

// 5
// var nhap_tuoi = prompt("Nhap so tuoi")
// if (nhap_tuoi >= 14) {
//     alert("Enjoy!")
// }
// else alert("You are not enough old to view this content")

// 6
// var nhap_so = prompt("Nhap vao 1 so")
// if (nhap_so >= 4.5) {
//     alert(nhap_so + " is higher half of 9")
// }
// else alert(nhap_so + " is lower half of 9")


//7
// var nhap_so_n = prompt("Nhap vao so can tim")
// var nhap_so_x = prompt("Nhap so can so sanh")

// if (nhap_so_n >= nhap_so_x/2) {
//     alert(nhap_so_n + " is higher half of " + nhap_so_x)
// }
// else alert(nhap_so_n + " is lower half of " + nhap_so_x)

//8
// var nhap_so = prompt("Nhap so can tim")

// if (nhap_so % 2 == 0) {
//     alert(nhap_so + " is even number")
// }
// else alert(nhap_so + " is odd number")

// 9a

// for (i = 1; i <= 6; i++) {
//     if (i <= 3) {
//         console.log('L')
//     }
//     else console.log('R')
// }

// 9b

// var nhap_so = prompt("Nhap so")
// for (i = 1; i <= nhap_so; i++) {
//     if (i <= Math.ceil(nhap_so / 2)) {
//         console.log('L')
//     }
//     else console.log('R')
// }

// 9C

// for (i=1; i<=8; i++) {
//     console.log(0)
//     console.log(1)
// }

// 9D
// var nhap_so = prompt("Nhap so")
// for (i = 1; i <= nhap_so; i++) {
//     console.log(0)
//     console.log(1)
// }

// 10 
var nhap_can_nang = prompt("Nhap can nang (KG)")
var nhap_chieu_cao = prompt("Nhap chieu cao (cm)")
var BMI = nhap_can_nang/(nhap_chieu_cao/100*nhap_chieu_cao/100)
alert("Your BMI is "+ parseFloat(BMI).toFixed(2))
if (BMI > 30) {
    alert("You are Obese")
} else if (BMI >= 25) {
    alert ("You are Overweight")
} else if (BMI >= 18.5) {
    alert ("You are normal")
} else if (BMI >= 16) {
    alert ("You are Underweight")
} else alert("You are Severely underweight")
