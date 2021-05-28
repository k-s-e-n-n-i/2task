import * as $ from "jquery"

$(function() {
  $('.dropdown-block__dropdown').on('click', handleDropwownClick);

  $('.dropdown-block__inc-qty-minus').on('click', handleDropdownMinusClick);
  $('.dropdown-block__inc-qty-plus').on('click', handleDropdownPlusClick);

  $('.dropdown-block__btns .link_ok').on('click', handleDropdownOkClick);
  $('.dropdown-block__btns .link_clean').on('click', handleDropdownCleanClick);


  function handleDropwownClick(){
    var block_list = $(this).closest('.dropdown-block').find('.dropdown-block__dropdown-items');

    if (block_list.hasClass('dropdown-block__dropdown-items_hide')){
      block_list.removeClass('dropdown-block__dropdown-items_hide');
      $(this).addClass('dropdown-block__dropdown_items-show');
    }else{
      block_list.addClass('dropdown-block__dropdown-items_hide');
      $(this).removeClass('dropdown-block__dropdown_items-show');
    }
  }


  function handleDropdownMinusClick(){
    let qtyElem : any, 
        qty : number = 0,
        newQty : number = 0, 
        min : number = 0;
    
    qtyElem = $(this).closest('.dropdown-block__block-qty').find('span');
    qty = parseInt(qtyElem.html());

    if (qty > min){
      newQty = qty - 1;
      qtyElem.html(newQty);  
    }

    if ( (qty == min+1) || (qty == min) ){
      $(this).addClass('dropdown-block__inc-qty_disable');
    }else{
      $(this).removeClass('dropdown-block__inc-qty_disable');
      let plus = $(this).closest('.dropdown-block__block-qty').find('.dropdown-block__inc-qty-plus');
      if (plus.hasClass('dropdown-block__inc-qty_disable')){
        plus.removeClass('dropdown-block__inc-qty_disable');
      }
    }

    outputInDropdown($(this).closest('.dropdown-block'));
  }

  function handleDropdownPlusClick(){
    let qtyElem : any, 
        qty : number = 0,
        newQty : number = 0,
        max : number = 10;
    
    qtyElem = $(this).closest('.dropdown-block__block-qty').find('span');
    qty = parseInt(qtyElem.html());

    if (qty < max){
      newQty = qty + 1;
      qtyElem.html(newQty);  
    }
    
    if ( (qty == max-1) || (qty == max) ){
      $(this).addClass('dropdown-block__inc-qty_disable');
    }else{
      $(this).removeClass('dropdown-block__inc-qty_disable');
      let minus = $(this).closest('.dropdown-block__block-qty').find('.dropdown-block__inc-qty-minus');
      if (minus.hasClass('dropdown-block__inc-qty_disable')){
        minus.removeClass('dropdown-block__inc-qty_disable');
      }
    }

    outputInDropdown($(this).closest('.dropdown-block'));
  }


  function handleDropdownOkClick(){
    event.preventDefault();
    $(this).closest('.dropdown-block').find('.dropdown-block__dropdown').click();
    
    outputInDropdown($(this).closest('.dropdown-block'));
  }

  function handleDropdownCleanClick() {
    event.preventDefault();
    let items = $(this).closest('.dropdown-block__dropdown-items');
    items.find('.dropdown-block__block-qty').find('span').html('0');
    items.find('.dropdown-block__inc-qty-minus').addClass('dropdown-block__inc-qty_disable');
    
    outputInDropdown($(this).closest('.dropdown-block'));
  }


  function outputInDropdown(dropdown : any) {
    let str : string = '';

    if (dropdown.attr('name') == 'guests'){
      str = countQtyGuests(dropdown);
    }
    if (dropdown.attr('name') == 'room'){
      str = countQtyComfortRoom(dropdown);
    }

    if (str.length > 19){
      str = str.substr(0, 20) + '...';
    }
    dropdown.find('.dropdown-block__dropdown').html(str);
  }

  function countQtyGuests(dropdown : any) : string {
    let lines = dropdown.find('.dropdown-block__items-line'),
        str : string = '',
        sumGuests : number = 0,
        sumBaby : number = 0,
        qty : HTMLElement,
        item : HTMLElement;
    
    for(let i = 0; i < lines.length; i++){
      qty = lines[i].querySelector('.dropdown-block__block-qty span');
      item = lines[i].querySelector('h3');
      if ((parseInt(qty.innerHTML) > 0) && (item.innerHTML != 'младенцы')){
        sumGuests = sumGuests + parseInt(qty.innerHTML);
      }
      if ((parseInt(qty.innerHTML) > 0) && (item.innerHTML == 'младенцы')){
        sumBaby = sumBaby + parseInt(qty.innerHTML);
      }
    }

    if (sumGuests == 0){
      str = 'Сколько гостей';
    }
    if ((sumGuests != 0) && (sumBaby != 0)){
      str = sumGuests + ' гостя, ' + sumBaby + ' младенец';
    }
    if ((sumGuests != 0) && (sumBaby == 0)){
      str = sumGuests + ' гостя';
    }

    return str;
  }

  function countQtyComfortRoom(dropdown : any) : string {
    let lines = dropdown.find('.dropdown-block__items-line'),
        str : string = '',
        qty : HTMLElement,
        item : HTMLElement;
    
    for(let i = 0; i < lines.length; i++){
      qty = lines[i].querySelector('.dropdown-block__block-qty span');
      item = lines[i].querySelector('h3');
      if (parseInt(qty.innerHTML) > 0){
        str = str + qty.innerHTML + ' ' + item.innerHTML + ', ';
      }
    }

    str = str.substr(0, str.length-2);
    if (str == ''){
      str = 'Выберите удобства';
    }

    return str;
  }
  
});