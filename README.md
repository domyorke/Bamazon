# Bamazon
Bamazon is a command line application that communicates with a mySQL database, takes in orders from customers, and depletes stock from the store's inventory. Once the customer chooses their product and quantity, Bamazon will display the total price.

### Database
A mySQL database was created to store Bamazon product information (name, company, price), and allows for the Bamazon Javascript to connect and check if the order is valid. If the order is invalid, the order will not go through, and the product quantity in the mySQL database will remain unchanged.

### Inquirer
The Inquirer NPM is installed and required within the Javascript, and asks the client two questions...

1. `What item_ID would you like to purchase?`
2. `How many would you like to purchase?`

Examples of these searches are shown below...

### Demos

##### Insufficient Quantity Demo...

![](https://github.com/domyorke/Bamazon/blob/master/Bamazon_Gifs/InsufficientQuantity.gif?raw=true)

##### Successful Order Demo...

![](https://github.com/domyorke/Bamazon/blob/master/Bamazon_Gifs/SuccessfulOrder.gif?raw=true)

Project created by Dominic Jenkins
