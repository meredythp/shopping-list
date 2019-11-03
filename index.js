$(function() {
    $("form button").click(function(event) {
        event.preventDefault();
        newItem = $('#shopping-list-entry').val();
        console.log(newItem);
        $("ul").append(
            // "<li>" +
            // ["cat", "dog", "rock"][Math.floor(Math.random()*3)] + "</li>"


            "<li>" +
            '<span class="shopping-item">'+newItem+'</span>'+
            '<div class="shopping-item-controls">'+
            '<button class="shopping-item-toggle">'+
                '<span class="button-label">check</span>'+
            '</button>'+
            '<button class="shopping-item-delete">'+
                '<span class="button-label">delete</span>'+
            '</button>'+
            '</div>'
            + "</li>"
        );
    });
    $('ul').on('click', '.shopping-item-delete', function(event) {
        this.closest( "li" ).remove();
    });
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        item = $(this.closest( "li" )).children("span")[0]
        $(item).toggleClass("shopping-item__checked");
    });
});