const person={name:'Jack William',age:17, job:'facebooker',gfName:'Ema Watson',address:'Kochu Khet',phone:'01717112211',friends:['Tom Hanks','Tom Cruise','Tom Yarn']}
const {gfName,age,address}=person;
console.log(gfName,age,address);
console.log(age);


//array destructure
const frineds=['Sakib khan','Arman Khan','Aamir Khan','Salman Khan','Sharukh Khan'];
const [firstFriend,secondFriend,...restFriends]=frineds;
console.log(firstFriend,secondFriend);
console.log(...restFriends);

//destructure complex object
const complexObject = {
    name: 'abc',
    info:{
        address:'Høje Gladsaxe',
        tel:'71697801'
    }
}
const {tel}=complexObject.info;
console.log(tel);

