
console.log ('2a. At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. Use JavaScript to calculate the cost of the order.');
console.log (10 + (3*8) + 5);
console.log ()
console.log ('2b. You\'re at a restaurant with 2 friends (3 people in total) and make the same order as 2a. Calculate how much each person pays.');
console.log ((10 + (3*8) + 5) * 1);
console.log ()
console.log ('2c. Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).');
console.log (18.50 + (2 * 7.50));
console.log ()
console.log ('2d. Calculate a 10% tax for the total in exercise 2c.');
console.log ( (18.50 + (2 * 7.50)) * 0.1 );
console.log ()
console.log ('2e. Calculate a 20% tax for the total in 2c (remember that 1% = 1/100, so 20% = 20/100 = 0.2');
console.log ( (18.50 + (2 * 7.50)) * 0.2 );
console.log ()

console.log ('Setup: in the Amazon project, go to the home page and add a toaster ($18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster. Choose $4.99 shipping for the toaster.')
console.log ('2f. Calculate the cost of the products (before shipping and taxes). Hint: calculate in the cents to avoid inaccuracies.')
console.log ( (2095 + 799 + 1899) / 100 )
console.log ()
console.log ('2g. Calculate the Total before tax.')
console.log ( (2095 + 799 + 1899 + 499) / 100 )
console.log ()
console.log ('2h. Calculate the 10% tax exactly. Hint: use Math.round()')
console.log ('- RoundingFunction ((non-float total items and shipping fee) * 10% tax ) / per-100')
console.log ( Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100 )
console.log ()
console.log ('2i. Calculate Order total at the bottom.')
console.log ( (Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100) + (Math.round(2095 + 799 + 1899 + 499) / 100) )
console.log ()
console.log ('Finnish: after 2i remove the toaster from your cart.')
console.log ()
console.log ('2j. Let\'s say we want to always round a number down (2.8 => 2) Using Google or A.I. tool, search for the code to do this.')
console.log (Math.floor(2.8))
console.log ()
console.log ('2k. Let\'s always round a number up (2.2 => 3). Search how to do this.')
console.log (Math.ceil(2.2))
console.log ()
console.log ('Challenge Exercises')
console.log ('We\'ll use JavaScript to convert temperatures from Celcius (°C) to Fahrenheit (°F) The formula is:')
console.log ('- Fahrenheit = (Celcius * 9 / 5) + 32')
console.log ('- Celcius = (Fahrenheit - 32) * 5 / 9')
console.log ()
console.log ('2l. The temperature is 25°C. Calculate the temperature in Fahrenheit. (77)')
console.log ((25 * 9 / 5) + 32)
console.log ()
console.log ('2m. The temperature is 86°F. Calculate the temperature in Celcius. (30)')
console.log ((86 - 32) * 5 / 9)
console.log ()
console.log ('2n. The temperature is -5°C. Calculate the temperature in Fahrenheit. (23)')
console.log ((-5 * 9 / 5) + 32)

