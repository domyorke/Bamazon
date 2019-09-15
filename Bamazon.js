var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Bamazon'
});

connection.connect();

connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;
    console.table(results);
    inquirer
        .prompt([
            {
                type: "input",
                message: "What item_ID would you like to purchase?",
                name: "yourProductID"
            },
            {
                type: "input",
                message: "How many would you like to purchase?",
                name: "quantityOfChosenItem"
            },
        ])
        .then(answers => {
            console.log(answers);
            var selectedItem = results.filter(function (item) {
                return (item.item_id === parseInt(answers.yourProductID));
            })
            console.log(selectedItem);
            if (parseInt(answers.quantityOfChosenItem) <= selectedItem[0].stock_quantity) {
                console.log(true);
                connection.query("UPDATE products SET stock_quantity = " + selectedItem[0].stock_quantity - answers.quantityOfChosenItem + " WHERE item_id = " + answers.yourProductID + "", function (error, results, fields) {
                console.log(results);
                console.log(error);

                })


            }
            else (console.log("Insufficient Quantity"));
        });

});

connection.end();


