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

const monthComponent = function (month, id, nth, days) {
  let daysHTML = "";

  for (let i = 1; i <= days; i++) {
    daysHTML += dayComponent(i, month, nth);
  }

  return `
<section id="${id}" class="${month}">
<h2>${month}</h2>
<div class="days">${daysHTML}</div>
<div class="selected-day"></div>
</section>
`;
};

const dayComponent = function (dayCount, month, nth) {
  return `
  <div class="card">
  <time datetime="YYYY">2022</time>
  <time datetime="MM">${month}</time>
  <time datetime="DD">${dayCount}</time>
</div>
  `;
};

const rootElement = document.querySelector("#root");

for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
  rootElement.insertAdjacentHTML(
    "beforeend",
    monthComponent(
      year[monthIndex].month,
      year[monthIndex].id,
      year[monthIndex].nth,
      year[monthIndex].days
    )
  );
}
