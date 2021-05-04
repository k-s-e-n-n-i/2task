# Верстка страниц по макету (задание №2)

## Клонирование репозитория локально
$ git clone https://github.com/KsuVla/2task

## Запуск проекта
Запустить проект: npm run start

## Github pages 
https://ksuvla.github.io/2task/

Запускается проект со следующими сверстанными страницами:
1. landing page
2. Search rooms
3. Detail room
4. Registration
5. Sihn in

6. Form element
7. Color & Type
8. Header & Footer
9. Cards

-----------------------------------------------------------
## Миксины pug

**1. Элементы - /blocks/elements/**
  **1.1. Кнопки.**
  ```
  mixin btn(obj)
  ```
  Пример вызова:
  ```
  +btn(
    {
      text : "Войти",
      dopclass : "btn_border",
      link : "#",
      arrow : false
    }
    )
  ```
***text*** - текст на кнопке  
***dopclass*** - варианты: btn_border, btn_gradient, btn_gradient_pay, btn_header (без передачи классов не придумала как сделать без дублирования)  
***link*** - ссылка для кнопки  
***arrow*** - присутствие или отсутствие стрелки на кнопке: true, false  
    

  **1.2. Список чекбоксов.**
  ```
  mixin checkboxList(obj,...items)
  ```
  Пример вызова:
  ```
  +checkboxList(
    { 
      stateHide : ""
    },
    {
      label : "Можно курить",
      id : 51,
      p : "",
      p__dopclass : ""
    },
    ...
    )
  ```
  ***stateHide*** - "checkbox-list_hide" - используется для того, чтобы скрыть список чекбоксов в checkboxListExpandable  

  ***label*** - текст чекбокса  
  ***p*** - дополнительный текст к label, шрифтом по-меньше  
  ***p__dopclass*** - "checkbox-list__p_width200" и "checkbox-list__p_width225" используются на страницах searchRoom и ui-kit_formElements, по дизайну перенос слов происходил не на одном уровне  

  **1.3. Разворачиваемый список чекбоксов.**
  ```
  mixin checkboxListExpandable(obj,...items)
  ```
  Пример вызова:
  ```
  +checkboxListExpandable(
    {
      topic : "дополнительные удобства",
      state : "close",
    },
    {
      label : "Завтрак",
      id : 71,
      p : "", 
    },
    ...
    )
  ```
  ***topic*** - заголовок списка чекбоксов  
  ***state*** - состояние: закрытое/свернутое - "close", открытое/развернутое - "open"  

  ***label*** - текст чекбокса  
  ***p*** - дополнительный текст к label, шрифтом по-меньше  

  **1.4. Блок с комментариями.**
  ```
  mixin commentBlock(obj,...items)
  ```
  Пример вызова:
  ```
  +commentBlock(
    {
      topic : "Отзывы посетителей номера",
      label : "2 отзыва"
    },
    {
      urlImg : "pages/detailsRoom/photo1.png",
      liked : true,
      qty : 12,
      name : "Мурад Сарафанов",
      time : "5 дней назад",
      text : `Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.`
    },
    ...
    )
  ```
  ***topic*** - заголовок блока  
  ***label*** - метка с количеством отзывов  

  ***urlImg*** - ссылка на изображение-фото  
  ***liked*** - состояние поставлен лайк или нет: true, false  
  ***qty*** - количество лайков  
  ***name*** - имя комментатора  
  ***time*** - дата-время, когда отставлен отзыв  
  ***text*** - текст отзыва  

  **1.5. dropdown со списком.**
  ```
  mixin dropdownBlock(obj,...items)
  ```
  Пример вызова:
  ```
  +dropdownBlock(
    { 
      topic : "Гости",
      label : "",
      activeText : "3 гостя",
      state : "close",
      btnClean : true,
      btnOk : true
    },
    {
      text : "взрослые",
      qty : 3,
      minus : "active",
      plus : "active"
    },
    ...
    )
  ```
  ***topic*** - заголовок  
  ***label*** - доп метка  
  ***activeText*** - отображаемый-выбранный текст  
  ***state*** - состояние: закрытое/свернутое - "close", открытое/развернутое - "open"  
  ***btnClean*** - наличие кнопки "Очистить": true, false  
  ***btnOk*** - наличие кнопки "Принять": true, false  

  ***text*** - текст элемента списка  
  ***qty*** - количество выбранного элемента  
  ***minus*** - состояние элемента уменьшения количества: "active", "disable"  
  ***plus*** - состояние элемента увеличения количества: "active", "disable"  

  **1.6. dropdown с датами.**
  ```
  mixin dropdownDates(obj,...items)
  ```
  Пример вызова:
  ```
  +dropdownDates(
    {
      btnClean : false,           //наличие кнопки "Очистить": true, false
      btnOk : false               //наличие кнопки "Принять": true, false
    },
    { 
      topic : "Прибытие",         //заголовок первой даты
      activeText : "19.08.2019",  //отображаемая-выбранная дата
    },
    { 
      topic : "Выезд",            //заголовок второй даты
      activeText : "23.08.2019",  //отображаемая-выбранная дата
    }
    )
  ```
  ***btnClean*** - наличие кнопки "Очистить": true, false  
  ***btnOk*** - наличие кнопки "Принять": true, false  
  ***topic*** - заголовок первой/второй даты  
  ***activeText*** - отображаемая-выбранная дата  

  **1.7. Футер. Два варианта**
  ```
  mixin footer
  mixin footerSimple
  ```
  Пример вызова:
  ```
  +footer
  +footerSimple
  ```
  Задаются без параметров. Обычный и упрощенный (для меньшего разрешения)  

  **1.8. Хедер.**
  ```
  mixin header(obj,...items)
  ```
  Пример вызова:
  ```
  +header(
    {
      authorization : false,
      name : "",
    },
    {
      menuItem : "О нас",
      state : "active",
      type : "expand"
    },
    ...
    )
  ```
  ***authorization*** - состояние авторизации: true, false  
  ***name*** - Имя авторизованного пользователя  

  ***menuItem*** - наименование пункта меню  
  ***state*** - состояние пункта меню: "active" - активный/выбраный, "main" или любое другое - обычный  
  ***type*** - тип пункта меню: "expand"- есть подпункты, можно развернуть; "main" или любое другое - обычный  

  **1.9. Блок с информацией, отображаемый в виде списка определенных фактов.**
  ```
  mixin infoBlock(obj,...items)
  ```
  Пример вызова:
  ```
  +infoBlock(
    {
      topic : "Сведения о номере",
      qtyHR : 2
    },
    {
      label : "Комфорт",
      text : "Шумопоглощающие стены",
      url : "blocks/elements/infoBlock/emoticon.svg",
      dopclass : "info-block__icon_emoticon"
    },
    ...
    )
  ```
  ***topic*** - заголовок блока  
  ***qtyHR*** - количество разделительных горизонтальных черт  

  ***label*** - наименование пункта/факта  
  ***text*** - текст к пункту  
  ***url*** - адрес расположения изображения к пункту  
  ***dopclass*** - класс для конкретного изображения, чтобы позиция соответствовала дизайну  

  **1.10. Интуп с заголовком.**
  ```
  mixin inputText(obj)
  ```
  Пример вызова:
  ```
  +inputText(
    {
      topic : "",
      label : "",
      placeholder : "Имя",
      inputText : "",
      state : "",
      id : "registration"
    }
    )
  ```
  ***topic*** - заголовок  
  ***label*** - доп метка  
  ***inputText*** - введеный текст  
  ***state*** - состояние: "focus", никакое - "" или любое другое значение  

  **1.11. Лайки.**
  ```
  mixin like(obj)
  ```
  Пример вызова:
  ```
  +like(
    {
      qty : 2,
      liked : false
    }
    )
  ```
  ***qty*** - количество  
  ***liked*** - состояние поставлен лайк или нет: true, false  

  **1.12. Ссылки.**
  ```
  mixin link(obj)
  ```
  Пример вызова:
  ```
  +link(
    {
      text : "Применить",
      url : '#',
      type : "ok"
    }
    )
  ```
  ***text*** - текст ссылки  
  ***url*** - адрес ссылки  
  ***type*** - тип ссылки: "ok", "clean" или другой  

  **1.13. Список.**
  ```
  mixin listBlock(obj,...items)
  ```
  Пример вызова:
  ```
  +listBlock(
    {
      topic : "Правила",
      tagTopic : "h2"
    },
    {
      text : "Нельзя с питомцами"
    },
    ...
    )
  ```
  ***topic*** - заголовок списка, "" - без заголовка  
  ***tagTopic*** - тип заголовка: "h2", "h3"  

  ***text*** - элемент списка

  **1.14. Пагинация.**
  ```
  mixin pagination(obj)
  ```
  Пример вызова:
  ```
  +pagination(
    {
      text : "1 – 12 из 100+ вариантов аренды",
      max : 15
    }
    )
  ```
  ***text*** - текст под блоком  
  ***max*** - максимальное значение (страниц)  

  **1.15. Блок радиокнопок.**
  ```
  mixin radiogroup(obj,...items)
  ```
  Пример вызова:
  ```
  +radiogroup(
    {
      nameGroup : "rbGroop",
      idMainBlock : id
    },
    {
      text : "Мужчина",
      check : "checked"
    },
    {
      text : "Женщина"
    },
    ...
    )
  ```
  ***nameGroup*** - имя группы кнопок  
  ***idMainBlock*** - любое значение, используется для формирования id кнопок  

  ***text*** - текст кнопки  
  ***check*** - состояние - выбрано; чтобы было "не выбрано", данную строку не нужно указывать совсем (как во третьем объекте примера)  

  **1.16. Слайдер.**
  ```
  mixin rangeSlider(obj)
  ```
  Пример вызова:
  ```
  +rangeSlider(
    {
      topic : "диапазон цены",
      labelMin : 5000,
      labelMax : 10000,
      id : "idPrice1",
      postText : "Стоимость за сутки пребывания в номере"
    }
    )
  ```
  ***topic*** - заголовок  
  ***labelMin*** - значение активного минимума  
  ***labelMax*** - значение активного максимума  
  ***postText*** - текст под блоком слайдера  

  **1.17. Блок кнопок-рейтинга**
  ```
  mixin rateBtn(obj)
  ```
  Пример вызова:
  ```
  +rateBtn(
    {
      qty : 5,
      active : 4
    }
    )
  ```
  ***qty*** - количество единиц оценки  
  ***active*** - количество выбранных (в данному случае оценка 4/5)  

  **1.18. Кнопка-переключатель.**
  ```
  mixin toggleBlock(obj)
  ```
  Пример вызова:
  ```
  +toggleBlock(
    {
      id : id,
      text : "Получать спецпредложения",
      active : "off"
    }
    )
  ```
  ***text*** - текст правее от кнопки  
  ***active*** - положение переключателя: "on", "off"  

  **1.19. Блок с заголовками для инпутов. Вызывается в инпутах.**
  ```
  mixin topicLabel(obj)
  ```
  Пример вызова:
  ```
  +topicLabel(obj)  
  ```
  Передается тот же объект с данными, который передается инпуту  

**2. Формы - /blocks/cards/**
  **2.1. Календарь.**
  ```
  mixin calendar(obj)
  ```
  Пример вызова:
  ```
  +calendar({state : "close"})
  ```
  ***state*** - состояние: закрытое/свернутое - "close", открытое/развернутое - "open"  

  **2.2. Карточка номера.**
  ```
  mixin cardRoom(obj)
  ```
  Пример вызова:
  ```
  +cardRoom(
    {
      id : 1,
      number : 888,
      price : "9 990",
      markLink : "люкс",
      review : 145,
      rating : 5
    }
    )
  ```
  ***number*** - номер номера
  ***price*** - стоимость номера
  ***markLink*** - доп ссылка-метка
  ***review*** - количество отзывов
  ***rating*** - рейтинг, кол-во звезд

  **2.3. Форма регистрации.**
  ```
  mixin formRegistration(obj)
  ```
  Пример вызова:
  ```
  +formRegistration(
    {
      id : "Main"
    }
    )
  ```
  ***id*** - id формы  

  **2.4. Форма резирвирования номера.**
  ```
  mixin formReservation(obj)
  ```
  Пример вызова:
  ```
  +formReservation(
    {
      number : 888,
      priceFrom : "9 990",
      priceFinal : "38 081"
    }
    )
  ```
  ***number*** - номер номера  
  ***priceFrom*** - стоимость номера  
  ***priceFinal*** - итоговая стоимость  

  **2.5. Форма поиска номера.**
  ```
  mixin formSearchNum
  ```
  Пример вызова:
  ```
  +formSearchNum
  ```
  Задается без параметров.  

  **2.6. Форма авторизации.**
  ```
  mixin formSignIn
  ```
  Пример вызова:
  ```
  +formSignIn
  ```
  Задается без параметров.  