
let oilCanvas = document.getElementById("oilChart");

let pieChart = new Chart(oilCanvas, {
  type: 'doughnut',
  data: {
    labels: [
      "Великолепно",
      "Хорошо",
      "Удовлетворительно",
      "Разочарован"
    ],
    datasets: [{
      data: [130, 65, 65, 0],
      backgroundColor: [
          "#FFE39C",
          "#BC9CFF",
          "#6FCF97",
          "#909090"
      ],
      borderColor: "white",
      borderWidth: 2,
      
    }]
  },
  options: {
    rotation: 0.5 * Math.PI,
    cutoutPercentage: 90,
    circumference: 2 * Math.PI,
    legend: {
      position: 'right',
      align: 'end',
      labels: {
        usePointStyle: true,
        boxWidth: 9,
        padding: 10,
        fontFamily: 'Arial',//'sans-serif',
        fontSize: 14
      },
    },
    animation: {
      animateRotate: false,
      animateScale: false
    },
    tooltips: {
      enabled: false
    }
  }
});

Chart.defaults.global.elements.defaultFontFamily = 'sans-serif';
Chart.defaults.global.defaultFontSize = 18;