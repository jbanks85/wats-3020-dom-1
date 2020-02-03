$(function() {
  $(document).submit(function(event) {
    event.preventDefault();
    // get the value of the input box using jQuery
let itemElement = $("[name='item-input']");
let itemValue = itemElement.val();
console.log(itemValue);

    //check that user has input a value before proceeding
    if (itemValue.length !== 0) {
      //create new item
 $(".todo-list").append("<li><input type='checkbox'><label>" + itemValue + " </label></li>");
itemElement.val('');

      //set up toggle on check box click
      $(":checkbox").change(function (event) {
        if ($(this).is(':checked')) {
          $(this).siblings("label").css("text-decoration", "line-through")
        } else {
          $(this).siblings("label").css("text-decoration", "none")
        }
      }) // checkbox event function

    }
  }) // form submit
}) // document ready