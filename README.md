Menu-simple
=========

This module allows to create a simple console menu for your node application. It allows you to register menu items with their handlers.

## Installation

    npm install menu-simple

## Methods

```javascript
var menu = require('menu-simple');
```

Each method returns reference on self object, so calls could be chained.

### menu.add(title, handler)

Add item to the menu. Returns __menu__ for chaining calls.

- _title_ - title of the menu item;
- _handler_ - item handler function;

```javascript
menu.addItem(
    'Menu Item',
    function() {
        console.log('Menu selected');
    });
```

### menu.show(config)

Shows menu

- _config_ - Optional , conatains messages;

```javascript
menu.addItem(
    {
		title : 'Menu',
		selectMessage : 'Your choice : ',
		closeMessage : 'Bye Bye.',
		errorMessage : "Please choose a valid item!"
	}
    );
```

## Example

## Live Example

will be provided soon
