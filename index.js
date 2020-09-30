function listInteract() {

    //listen for form submit
    $('#js-shopping-list-form').submit(function(event) {
        //prevent default
      event.preventDefault();
        //store user text as var
      const userItem = $(this).find('#shopping-list-entry');
        //append shopping list with new item
      $('.shopping-list').append(`
        <li>
            <span class="shopping-item">${userItem.val()}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle"><span class="button-label">check</span></button>
                <button class="shopping-item-delete"><span class="button-label">delete</span></button>
            </div>
        </li>`);
        //clear text field
      userItem.val("");
    });  
    
    //listen for check click using delegation
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        //from closest list item to button, find shopping item and toggle class
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');              
    })
    
    //listen for 'remove' button click using delegation
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        //remove closest li to button
        $(this).closest('li').remove();        
    })

}

//run function listInteract
$(listInteract);