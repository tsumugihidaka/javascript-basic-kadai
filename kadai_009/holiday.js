holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

let holidaynum = holidays.length - 1;

console.log('▼for文');

for (let i = 0; i <= holidaynum ; i++) {
   console.log(holidays[i]);
 }


console.log('▼while文');

var randomnum = 0;
while (randomnum<holidaynum + 1){
console.log(holidays[randomnum]);
  randomnum++;
}