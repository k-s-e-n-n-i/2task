import { getElementBySelector } from '../../modules/functions/getElementBySelector.function';
import * as Chart from 'chart.js';

const getCanvasElement = (item: Element, selector: string): HTMLCanvasElement => {
  const canvas = item.querySelector(selector);

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error(
      `The element of id "${selector}" is not a HTMLCanvasElement. Make sure a <canvas id="${selector}""> element is present in the document.`
    );
  }

  return canvas;
};

class ChartBlock {
  chart: Element;
  canvas: HTMLCanvasElement;
  labels: string[];
  backgroundColor: string[];
  legendList: HTMLElement;

  constructor(chart: Element, labels: string[], backgroundColor: string[]) {
    this.chart = chart;
    this.canvas = getCanvasElement(chart, 'canvas');
    this.labels = labels;
    this.backgroundColor = backgroundColor;

    this.legendList = getElementBySelector(this.chart, '.chart__legend-list');
  }

  init() {
    new Chart(this.canvas, {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: [130, 65, 65, 0],
            backgroundColor: this.backgroundColor,
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

    this.labels.length != 0 ? this.outputLegend() : false;
  }

  outputLegend() {
    this.labels.forEach((item) => {
      const liLegend = document.createElement('li');
      liLegend.className = 'chart__legend-item';

      const divPoint = document.createElement('div');
      divPoint.className = 'chart__legend-point';

      const text = document.createElement('p');
      text.className = 'chart__legend-item-text';
      text.innerHTML = `${item}`;

      liLegend.append(divPoint);
      liLegend.append(text);

      this.legendList.append(liLegend);
    });

    if (this.backgroundColor.length != 0) {
      this.labels.forEach((item, i) => {
        const point = getElementBySelector(
          this.legendList,
          `.chart__legend-item:nth-child(${i + 1}) .chart__legend-point`
        );
        point.style.backgroundColor = this.backgroundColor[i];
      });
    }
  }
}

let settings = {
  labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
  backgroundColor: ['#FFE39C', '#6FCF97', '#BC9CFF', '#909090'],
};

document.querySelectorAll('.chart').forEach((item: Element) => {
  new ChartBlock(item, settings.labels, settings.backgroundColor).init();
});
