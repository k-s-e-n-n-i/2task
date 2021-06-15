import * as Chart from 'chart.js';

let oilCanvas = document.getElementById('oilChart');

let pieChart = new Chart(oilCanvas, {
  type: 'doughnut',
  data: {
    labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
    datasets: [
      {
        data: [130, 65, 65, 0],
        backgroundColor: ['#FFE39C', '#6FCF97', '#BC9CFF', '#909090'],
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  },
  options: {
    rotation: 0.5 * Math.PI,
    cutoutPercentage: 90,
    circumference: 2 * Math.PI,
    position: 'left',
    legend: {
      display: false,
      position: 'right',
      align: 'end',
      labels: {
        usePointStyle: true,
        boxWidth: 9,
        padding: 10,
        fontFamily: 'Arial',
        fontSize: 14,
      },
    },
    animation: {
      animateRotate: false,
      animateScale: false,
    },
    tooltips: {
      enabled: false,
    },
  },
});

console.log(pieChart.data.labels);
Chart.defaults.global.elements.defaultFontFamily = 'sans-serif';
Chart.defaults.global.defaultFontSize = 18;

let qtyLine = pieChart.data.labels.length;
let items = pieChart.data.labels;
let colors = pieChart.data.datasets[0].backgroundColor;

console.log(colors);

for (let i = 0; i < qtyLine; i++) {
  let liLegend = `<li class="list-block__item"><div class="list-block__point"></div><p>${items[i]}</p></li>`;

  $('.chart__legend .list-block__list').append(liLegend);
  $(`.chart__legend .list-block__item:nth-child(${i + 1}) .list-block__point`).css(
    'background-color',
    colors[i]
  );
}

$('.chart__legend .list-block__item::before').css('width', '100px');
