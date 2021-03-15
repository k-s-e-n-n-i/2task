demoslider_MVC.ts
	Настройки - "панель конфигурирования"
	check - меняет значения в объекте с данными
	config - производятся действия с панелью Настроек
	-----------------------------------------------------------

	class Model
		во все методы передаются html-элемент слайдер (thisSlider) и объект с данными-параметрами (dataSlider), возвращаются number или any
		(thisSlider : any, dataSlider : object, model : any)

		width - определяет ширину слайдера в пикселях
		sliderBlock - ищет блок со слайдером и заголовком ('.rangeSlider), без настроек ('.sliderConf')
		slider - ищет именно блок со слайдером/шкалой ('.rangeSlider_slider')
		height - определяет высоту блока со слайдером и заголовком ('.rangeSlider)
		ind - ищет элемент, отображающий активный диапазон значений, индикатор, зеланая линия
		indWidth - определяет ширину активного диапазона в пикселях
		rangeLeft - ищет элемент левой границы диапазона, шарик ('.rangeSlider_slider_left')
		posRangeLeft - определяет позицию левой границы диапазона относительно начала шкалы в пикселях
		rangeRight - ищет элемент правой границы диапазона, шарик ('.rangeSlider_slider_right')
		posRangeRight - определяет позицию правой границы диапазона относительно начала шкалы в пикселях
		valueMin - ищет элемент, отображающий значение левой границы диапазона ('.rangeSlider_label__min')
		valueMax - ищет элемент, отображающий значение правой границы диапазона ('.rangeSlider_label__max')

		переменные
		masScaleStep  - массив, используется для хранения значений пикселей соответсвующих позициям, где расположены "шаги". Применяется, когда задан шаг у слайдера, то есть бегунок перемещается по точкам, перескакивая промежуточные значения.
		configItemMin - строка, содержащая в себе "путь" до элемента-поля в Настройках ('.sliderConf') для ввода минимума
		configItemMax - строка, содержащая в себе "путь" до элемента-поля в Настройках ('.sliderConf') для ввода максимума
		configItemMinStart - строка, содержащая в себе "путь" до элемента-поля в Настройках ('.sliderConf') для ввода текущего значения левой границы
		configItemMaxStart - строка, содержащая в себе "путь" до элемента-поля в Настройках ('.sliderConf') для ввода текущего значения правой границы
		configItemStep - строка, содержащая в себе "путь" до элемента-поля в Настройках ('.sliderConf') для ввода шага (если задана 1, то ...)
		configItemScaleStep - строка, содержащая в себе "путь" до элемента-поля в Настройках ('.sliderConf') для ввода количества делений на шкале
		configItemRadiobtn - строка, содержащая в себе "путь" до любого элемента-радиокнопки в Настройках ('.sliderConf')

	class View
		во все методы передаются html-элемент слайдер (thisSlider) и объект с данными-параметрами (dataSlider), ничего не возвращают
		(thisSlider : any, dataSlider : object, model : any) : void

		range - отрисовывает позиции границ бегунка и саму линию значений
		type - в зависимости от заданного типа слайдера (type), отрисовывает/скрывает элементы 
		scale - в зависимости от заданных в scale и scaleStep отрисовывает или скрывает шкалу делений
		orientation - в зависимости от заданной ориентации меняет положение самого блока со слайдером, а также корректирует отображение значений около делений шкалы
		value - в зависимости от заданного value отрисовывает/скрывает элементы, отображающие значения текущего выбранного диапазона значений ('.rangeSlider_label_Block')

	class Controller
		встречающиеся переменные:
		dataSliderOrientation - значение ориентации из объекта с данными о слайдере

		thisSlider - html-элемент слайдер
		dataSlider - объект с данными-параметрами сладера
		range - html-элемент левый или правый шарик
		e 
		lr - строковое значение 'left' или 'right', соответсвует тому, какую границу диапазона двигают
		model - экземпляр класса Model
		controller - экземпляр класса Controller 

		startPos - стартовая позиция шарика, с которой началось движение, в пикселях

		indWidth - расчитанная итоговая (после перемещения) длина активного диапазона (зеленой линии) в пикселях

		pos - итоговая позиция шарика, на которой закончено движение, в пикселях


		checkOrientation(dataSliderOrientation : string) : string - определяет ориентацию, возвращает значение 'x' или 'y'

		movie(thisSlider : any, dataSlider : object, range, e, lr : string, model : any, controller : any) : void - метод запускается при зажиме левого или правого шарика ползунка, сам запускает другой метод - moveAt

		moveAt(thisSlider : any, dataSlider : object, startPos : number, lr : string, e, indWidth : number, model : any, controller : any) : void - в зависимости от заданной ориентации вычисляет и перемещает крайние значения бегунка. За перемещение отвечает следующий метод - movingRange.
		
		getCoords(elem : any) : object - определяет позицию шарика по х и у относительно страницы (используется при вертикальной ориентации), взято с https://learn.javascript.ru/coordinates-document
			elem - html-элемент, позиция которого определяется. В данном случае позиция шарика (правого/левого).

		movingRange(thisSlider : any, dataSlider : object, lr : string, startPos : number, pos : number, indWidth : number) - перемещает левую или правую границу ползунка
			 function calc(thisSlider : any, dataSlider : object, pos : number) - функция рассчета стоимости в точке итогового расположения перемещаемой границы, возвращает значение суммы, которое выводится в '.rangeSlider_label__min' или '.rangeSlider_label__max'

		writeValueMin(thisSlider : any, val : number) - прописывает значение val(текущее) в элемент '.rangeSlider_label__max'
		writeValueMax(thisSlider : any, val : number) - прописывает значение val(текущее) в элемент '.rangeSlider_label__max'
		checkDataSliderMin(dataSlider : object, val : number) - обновляет текущее минимальное значение (minStart) в объекте с данными о слайдере
		checkDataSliderMax(dataSlider : object, val : number) - обновляет текущее максимальное значение (maxStart) в объекте с данными о слайдере
		configMinChange(thisSlider : any, dataSlider : object, val : number) : void - прописывает значение min в соответсвующее поле в Настройках 
		configMaxChange(thisSlider : any, dataSlider : object, val : number) : void - прописывает значение max в соответсвующее поле в Настройках

		clickSlider(thisSlider : any, dataSlider : object, model : any, controller : any) : void - перемещает ближайшую к месту клика границу диапазона в точку щелчка
		checkRangeThisStep(thisSlider : any, dataSlider : object, pos : number, model : any, controller : any) : number - определяет позицию, которая ближе всего в точке клика; вызывается в clickSlider()
		masScale(thisSlider : any, dataSlider : object, model : any) : number[] - вычисляет точки-пиксели (массив), по которым бегунок может "шагать", если задан шаг; возвращае массив значений пикселей; вызывается в checkRangeThisStep()

		configCheck(thisSlider : any, dataSlider : object, model : any, controller : any, view : any) : void - отрабатывает клики по радиокнопка и полям в Настройках (минимум, максимум, тип, ориентация, шкала и т.д.). Введеные в поля значения сразу отображаются на слайдере. Выбранные радиокнопки сразу перерисовывоют слайдер в соответсвии с выбранными значениями. А также все выбранные/введенные значения прописываются в объект с данными о слайдере.

		checkMinMaxStart(dataSlider : object) : void - прогоняет текущие значения minStart и maxStart, сравнивает с min и max, если текущиеслучайно вышли на пределы возможных значений, то ему присваивается крайнее возможное значение

		configCheckStart(thisSlider : any, dataSlider : object, model : any, controller : any) : void - прописывает все значения из объекта с данными о слайдере в поля Настроек и устанавливает соответсвующие радиокнопки (checked)