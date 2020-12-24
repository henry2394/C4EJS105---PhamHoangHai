// Init
let movie = ['the walking dead', 'friends', 'how i met your mother'];
// console.log(movie)
// Create
// movie.push('them 1 phim')
// console.log(movie) 
// Read
// console.log(movie[1])

// Update 1
// var nhap_ten = prompt("nhap ten phim")
// movie[1] = nhap_ten
// console.log(movie)

//update 2
// var nhap_ten = prompt("nhap ten phim")
// var nhap_vitri = prompt("nhap vi tri")

// movie[nhap_vitri] = nhap_ten
// console.log(movie)

// delete 1
// let vi_tri_xoa = prompt("nhap index muon xoa")
// movie.splice(vi_tri_xoa,1)

// delete 2
// let vi_tri_xoa = prompt("nhap index muon xoa")
// let so_luong_xoa = prompt("nhap so luong xoa")
// movie.splice(vi_tri_xoa,so_luong_xoa)

//Read All

// Read or log all of items in movies array into console
// for (i =0 ; i < movie.length ; i++) {
//     console.log(movie[i])
// }

// Read or log only first half items in movies array into console
// for (i =0 ; i < (movie.length/2) ; i++) {
//     console.log(movie[i])
// }

//Read or log all of items in movies array into console with the item position,

// for (i =0 ; i <= movie.length ; i++) {
//     console.log(i + ". "+movie[i])
// }

// Update All
// Change all items of movies array into lowercase/uppercase
// for (i =0 ; i < movie.length ; i++) {
//     movie[i] = movie[i].toUpperCase();
// }
// console.log(movie)

// Purpose of While 
// check name
// var nhap_ten = prompt("nhap ten")
// if (nhap_ten.length > 15) {
//     alert("your name is too long")
// }
// else alert("good")


//a quiz with 4 choices,
let quiz = prompt('How many legs does a spider have? \n\
                1, None \n\
                2, 4 legs \n\
                3, 8 legs \n\
                4, 12 legs')
let array = [1, 2, 3, 4]


if (quiz ==3 && quiz in array) {
    alert('Bravo, you are correct')
} else if (quiz != 3 && quiz in array) {
    alert('Good luck next time')
} else alert('out of range')

