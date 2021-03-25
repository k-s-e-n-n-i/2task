
//var barChart = new Chart({...})

console.log('aaaaaaaaaaaaaaaaa!!');

let oilCanvas = document.getElementById("oilChart");
//    ctx = oilCanvas.getContext('2d');






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
    /*title: {
      display: true,
      text: 'Пример Chart.js',
      position: 'top'
    },*/
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
    /*layout: {
      padding: {
          left: 50,
          right: 0,
          top: 0,
          bottom: 0
      }
    }*/
  }
});

Chart.defaults.global.elements.defaultFontFamily = 'sans-serif';
Chart.defaults.global.defaultFontSize = 18;