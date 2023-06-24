let time = new Date();

time.setDate(0);

let months = [
  "jan",
  "fab",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

months = months.map((el) => {
  return `${el[0].toUpperCase()}${el.slice(1)}`;
});

console.log(time);
console.log(`Previous Month is ${months[time.getMonth()]} And Last Day Is ${time.getDate()}`);
