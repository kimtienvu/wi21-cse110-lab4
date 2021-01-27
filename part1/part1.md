#1. What will happen at line 11 and why?

The length of "prices" will be printed to the console, "i" is visible after the loop and it is a global variable (since this variable is declared with "var").

#2. What will happen at line 12 and why?

The value of "discountedPrice" (calculated inside the for loop) will be printed to the console, "discountedPrice" is visible after the loop and it is a global variable (since this variable is declared with "var").

#3. What will happen at line 13 and why?

The value of "finalPrice" (calculated inside the for loop) will be printed to the console, "finalPrice" is a global variable and its value is updated inside the for loop.

#4. What will the function return if we call discountPrices([100, 200, 300], .5) ? Give a brief explanation

The function will return an array like so: `[50, 100, 150]`. This is because the variable "discounted" is a global variable and the elements of this array gets updated inside the for loop (divides each element of "prices" by 50% and this result gets appended to the "discounted" array), so when the function returns, "discounted" is filled with values.

---

#5. What will happen at line 11 and why?

There will be an error (ReferenceError: i is not defined) because the variable "i" is only visible inside the code block scope of the for loop (variable is declared using the keyword "let" inside the for loop so it is only visible in the scope of this code block).

#6. What will happen at line 12 and why?

There will be an error (ReferenceError: discountedPrice is not defined) because the variable "discountedPrice" is only visible inside the code block scope of the for loop (variable is declared using "let" inside the for loop, so it is only visible in the scope of this code block).

#7. What will happen at line 13 and why?

The value of "finalPrice" (calculated inside the for loop) will be printed to the console, "finalPrice" is a global variable ("finalPrice" is declared using "let" outside the for loop, so it is a global variable) and its value is updated inside the for loop.

#8. What will the function return if we call discountPrices([100, 200, 300], .5) ? Give a brief explanation

There will be an error at runtime because there is a reference error on line 11.
However, if we comment out the console.log statements (comment out lines 11 and 12) and run the function again, we will get `[50,100,150]`
as the final output because discounted is a global variable (the scope is global since it is declared outside the for loop) and its value gets updated inside the for loop, hence we are still able to get this output because "discounted" is a global variable.
Note: *Lines 11 and 12 must be commented out or we will get a reference error*

---

#9. What will happen at line 11 and why?

We will get an error on line 7 before getting to line 11 because finalPrice is a constant and we are trying to override this constant with a new value. However, if we pretend for the sake of this question that we are only looking at "i", then
there will be an error (ReferenceError: i is not defined) because the variable "i" is only visible inside the code block scope of the for loop (variable is declared using the keyword "let" inside the for loop so it is only visible in the scope of this code block).

#10. What will happen at line 12 and why?

There will be an error because discountedPrice is a constant and we are trying to re-assign it's value. If we ignore the assignment error,
there will also be a ReferenceError: discountedPrice is not defined because the scope of discountedPrice is inside the for loop code block (not global).

#11. What will happen at line 13 and why?

There will be an error because finalPrice is a constant and we are trying to update the value of finalPrice inside the for loop.

#12. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.

The function will not be able to return anything because an error will be thrown since we are trying to assign a value to a const "finalPrice" when this is ilegal.
However, if we assume that assignment was successful in replacing the previous value of the variable, then the output would be `[50,100,150]` (because I am assuming that all assignments to constants are allowed and "discounted" is a global variable)

---

#13. Given the above Object, write the notation for:

#A. Accessing the value of the name property in the student object

`student.name;`

#B. Accessing the value of the Grad Year property in the student object

`student['Grad Year'];`

#C. Calling the function for the greeting property in the student object

`student.greeting();`

#D. Accessing the name property of the object in the Favorite Teacher property in student

`student['Favorite Teacher']['name'];`

#E. Access the first index in the array of the courseLoad property of the student object

`student['courseLoad'][0];`

---

#14. Arithmetic

#A.‘3’ + 2

Output: `'32'` because `'3'` is a string so if we do addition with strings in javascript, it is string concatenation.

#B.‘3’ - 2

Output: `1` because `3` becomes a number in order to do subtraction.

#C. 3 + null

Output: `3` because `null` becomes 0 in a numeric conversion.

#D. ‘3’ + null

Output: `'3null'` because `'3'` is a string and addition with strings becomes concatenations.

#E. true + 3

Output: `4` because numeric conversion of `true` is 1, so 1 + 3 = 4.

#F. false + null

Output: `0` because numeric conversion of `false` is 0 and `null` is 0, so 0 + 0 = 0.

#G. “3” + undefined

Output: `'3undefined'` because `"3"` is a string and addition with strings becomes concatenations.

#H. “3” - undefined

Output: `NaN` because `undefined` in numeric conversions becomes `NaN` and numeric manipulations with `NaN` result in `NaN`.

#15. Comparison

#A.‘2’ > 1

Output: `true` because the string `'2'` becomes the number 2, so 2 is greater than 1.

#B.‘2’ < ‘12’

Output: `false` because the dictionary comparison has `'2'` is greater than the first character in `'12'` (which is `'1'`)

#C. 2 == ‘2’

Output: `true` because the string `'2'` becomes the number 2, hence 2 is equal to 2.

#D. 2 === ‘2’

Output:`false` because the types are different.

#E. true == 2

Output: `false` because `true` becomes `1` if converted to number form.

#F. true === Boolean(2)

Output: `true` because `Boolean(2)` evaluates to `true` and both `true` and `Boolean(2)` are boolean types.

#16. Explain the difference between the == and === operators.

The difference between `==` and `===` is that `===` is the strict equality operator and checks the equality without type conversion
and that `==` is a regular equality check (so `0` is the same as `false` if using `==`).

#17. From the code snippet below, explain what gets printed and why.

Output: `How are you?` gets printed because `2==true` will be false since `true` evaluates to `1` using `==` and as long as the `else if(2)` is not `else if(0)`, then the `else if(2)` statement will run.

---

#19. If the function below is called with the following parameters `modifyArray([1,2,3], doSomething)`, what will be the result? Briefly walk through how you arrived at that result.

The result is `[6,8,10]`. The input array is `[1,2,3]`, the `callback` is `doSomething` and `function(x)`; where the input `x` to `function(x)` is the result of `doSomething`.

In the first iteration of the for loop, we take `1` and add `2` (inside the `doSomething` callback function) to get `3`, then we multiply `3` and `2` to get `6` (`6` will be the first element inside `newArr`).
Then in the second iteration of the for loop, we take `2` and add `2` to get `4` (inside `doSomething`), then `4` passes into `function(x)` as `function(4)` (so `4 * 2` will be `8`). `8` will be the second element inside `newArr`.
Lastly, in the third iteration of the for loop, we take `3` and add `2` to get `5` and then multiply `5` by `2` to get `10`.
Therefore the result is `[6,8,10]`.

---

#21. What is the output of this code?

The output is (each number is on a new line): `1 4 3 2` because each console.log print statement goes on a new line. `1` will appear first because there is no timeout and it is the first console.log statement. Since `2` and `3` both have timeouts, these will have to wait until the timer expires to run, hence `4` will print. `3`'s timer will expire before `2`'s timer, therefore `3` will print next and lastly `2`.



