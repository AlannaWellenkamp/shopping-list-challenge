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
    
}

//run function listInteract
$(listInteract);