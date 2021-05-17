import $ from "jquery"

$(function() {
  $('.dropdown-block__dropdown').on('click', handleDropwownClick);

  $('.dropdown-block__inc-qty-minus').on('click', handleDropdownMinusClick);
  $('.dropdown-block__inc-qty-plus').on('click', handleDropdownPlusClick);


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
    let qtyElem : object, 
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
  }

  function handleDropdownPlusClick(){
    let qtyElem : object, 
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
  }
  
});