MindArc Frontend Assessment https://www.mindarc.com.au/
Demo: https://jovial-snyder-7f628c.netlify.com/
###### Deployed on Netlify.

## Steps to run

1. You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine<br>
    https://nodejs.org/en/
    
2. In the project directory, you can run:<br>

    ### `$ npm install`
    ###### It will install all required dependencies.

3. Now in the project directory, you can run:

    ### `$ npm start`

    It runs the app in the development mode.<br>
    Ready to go! <br>
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4.    ### `$ npm run test`

      Launches the test runner in the interactive watch mode.<br><hr>


##### Why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana?
.toLowerCase function only exists on strings. `+'a'` resolves to NaN ("Not a Number") because it force a string to a number
(as s using `+` before any value in JavaScript will convert that value to a number), 
and here  `line3` the character `a` cannot be parsed as a number. So we have `baNaN`.
It will concatenate `a` to `baNaN` and at the with applying `.toLowerCase` we have `banana`.


```

> 'b' 
"b" 
    
> 'b' + 'a' 
"ba"

// *** line3 *** 
>'b' + 'a' + + 'a' 
"baNaN" 

>'b' + 'a' + + 'a' + 'a' 
"baNaNa" 

>('b' + 'a' + + 'a' + 'a').toLowerCase() 
"banana"

```
