const year = [
  {
    month: "January",
    id: "jan",
    nth: 1,
    days: 31,
  },
  {
    month: "February",
    id: "febr",
    nth: 2,
    days: 28,
  },
  {
    month: "March",
    id: "marc",
    nth: 3,
    days: 31,
  },
  {
    month: "April",
    id: "apr",
    nth: 4,
    days: 30,
  },
  {
    month: "May",
    id: "may",
    nth: 5,
    days: 31,
  },
  {
    month: "June",
    id: "june",
    nth: 6,
    days: 30,
  },
  {
    month: "July",
    id: "july",
    nth: 7,
    days: 31,
  },
  {
    month: "August",
    id: "aug",
    nth: 8,
    days: 31,
  },
  {
    month: "September",
    id: "sept",
    nth: 9,
    days: 30,
  },
  {
    month: "October",
    id: "oct",
    nth: 10,
    days: 31,
  },
  {
    month: "November",
    id: "nov",
    nth: 11,
    days: 30,
  },
  {
    month: "December",
    id: "dec",
    nth: 12,
    days: 31,
  },
];

/* <div class="card">
  <time datetime="YYYY">YYYY</time>
  <time datetime="MM">MM</time>
  <time datetime="DD">DD</time>
</div>; */

const monthCard = function (nth, name, days) {
  let daysHTML = "";

  for (let i = 1; i <= days; i++) {
    daysHTML += dayElement(i);
  }
  return `
<section id="${nth}" class="${name}">
<h2>${name}</h2>
<div class="days">${daysHTML}</div>
<div class="selected-day"></div>
</section>
`;
};

const dayElement = function (dayQuantity) {
  return `
  <div class="day">${dayQuantity}</div>
  `;
};
