// const mainTitle = document.querySelector(".main-title")

// const telNumber = [
//   "94-044-30-40",
//   "90-753-55-00",
//   "93-924-16-17",
//   "94-598-20-11",
//   "90-599-06-39",
//   "91-280-00-21",
//   "94-425-20-11",
//   "91-369-07-65",
//   "93-419-90-00",
//   "88 571 99 71",
// ];

// function change() {
//   let interval = setInterval(() => {
//     let index = Math.floor(Math.random() * telNumber.length);
//     mainTitle.innerHTML = `+998 ${telNumber[index]}`;
//   }, 10)

//   setTimeout(() => {
//     clearTimeout(interval);
//   }, 5000)
// }


// let object = {
//   firstName:  "Islomjon",
//   lastName:  "Bositov",
//   age:  16,
//   hobby:  "Play valeyball and hard study",
//   country:{
//     city: "Uzbekistan",
//   }
// };

// console.log(object.firstName);

// // const {firstName, lastName, age, hobby, country = {city}} = object;
// // console.log(firstName);
// // console.log(country);

// const arr = [`Algoritm`, `Start21`, `LangApex`, `Taraqiyot`, `SPC`];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// const [alg, sta, lang, tara, spc] = arr;
// console.log(lang);


const side = document.querySelector('.side')


function toggleSide(){
  side.classList.toggle('side-visible')
}

