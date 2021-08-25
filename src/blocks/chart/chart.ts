import * as Chart from 'chart.js';

let oilCanvas: any = document.getElementById('oilChart');

let settings = {
  labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
  backgroundColor: ['#FFE39C', '#6FCF97', '#BC9CFF', '#909090'],
};

let pieChart = new Chart(oilCanvas, {
  type: 'doughnut',
  data: {
    labels: settings.labels,
    datasets: [
      {
        data: [130, 65, 65, 0],
        backgroundColor: settings.backgroundColor,
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  },
  options: {
    rotation: 0.5 * Math.PI,
    cutoutPercentage: 90,
    circumference: 2 * Math.PI,

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

Chart.defaults.global.defaultFontSize = 18;

settings.labels.length ? outputLegend(settings.labels, settings.backgroundColor) : false;

function outputLegend(items: string[], colors: string[]) {
  items.forEach(function (item) {
    let liLegend = `<li class="chart-legend__item"><div class="chart-legend__point"></div><p class='chart-legend__item-text'>${item}</p></li>`;

    $('.chart-legend .chart-legend__list').append(liLegend);
  });

  if (colors.length != 0) {
    items.forEach(function (item, i) {
      $(`.chart-legend .chart-legend__item:nth-child(${i + 1}) .chart-legend__point`).css(
        'background-color',
        colors[i]
      );
    });
  }
}
