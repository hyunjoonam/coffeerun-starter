// write you code here
$(function(){
    var orders = [];

    function renderCoffeeOrder(order){
        var finalHTML = '<div class="order">';

        finalHTML += '<span>' + order.coffeeOrder + '</span>';
        finalHTML += '<span>' + order.email + '</span>';
        finalHTML += '<span>' + order.size + '</span>';
        finalHTML += '<span>' + order.flavorShot + '</span>';
        finalHTML += '<span>' + order.strength + '</span>';

        finalHTML += '<button class="delte">X</button>';
        finalHTML += '</div>';

        // add stuff to finalHTML based on the order that's being passed

        return finalHTML;
    }



    //Listen for when people submit the form
    $('form').submit(function(e){
        //code inside here will execute when the form is submitted
        e.preventDefault();
        //maybe dfine some variables, set them equal to the values of the form fields
        var currentOrder = {
            coffeeOrder: $("#coffeeOrder").val(),
            email: $("#emailInput").val(),
            size: $("input:checked").val(),
            flavorShot: $("#flavorShot").val(),
            strength: $("#strengthLevel").val()
        };

        orders.push(currentOrder);

        var renderedHTML = renderCoffeeOrder(currentOrder);
        $("#orderList").append(renderedHTML);
        // want renderedHTML to show up in the DOM

        console.log(orders);
    });
});


// $('#orderList').on('click', '.delete', function (){
//     //delete a coffe order from the orders array
//   
// })


// $('.delete').click(function(){

})