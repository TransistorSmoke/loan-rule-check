# cc-tech-challenge
This codebase is my answer to Car Clarity's technical challenge.

1.) HOW TO SETUP AND RUN
------------------------
  - npm install       --> to install dependencies
  - npm run serve     --> to run the app


2.) DOCUMENTATION & SUMMARY OF THE SOLUTION
-------------------------------------------
The is app calculates the monthly loan repayment required of a lender.
This repayment is calculated based on the based on the requirements (rules) provided - namely Lender A and Lender B.

The equation to calculate the repayment value varies according to the rule used.

1.) The Repayment Form
    - This is contained in the component called 'LoanRepaymentForm'.
    - The form takes in the details such as the RULE TYPE, LOAN AMOUNT (principal value), and LOAN TERM in years.
    - From these 3 parameters, the PMT is calculated, and finally the monthly REPAYMENT value.
    - Validations are set in the form in order to prevent unwanted/unnecessary data input.

2.) The Repayment Summary Table
    - The table is rendered in the component called 'LoanCalculationsTable'.
    - The submitted data and the calculated repayment value from 'LoanRepaymentForm' component gets emitted to 'LoanCalculationsTable' for display.
    - This table shows the info entered by the user and the calculated repayment value:
        - lender rule type
        - loan amount
        - loan term (in years and months)
        - repayment value

3.) The Helper Service
    - Calculations for the PMT and final repayment value are written in this service.
    - The function (getPmtValue) calculates the PMT, using the library 'pmt' (https://github.com/FormulaPages/pmt).
    - The function (getMonthlyRepayment) calculates the final REPAYMENT value.

    --- To test, enter some details on the form and check the resulting repayment value in the table. ---


4.) LENGTH OF TIME SPENT CREATING THE APPLICATION
-------------------------------------------------
    - Time spent creating the application, including this required documentation and the walkthrough, is approximately 8 hours.


5.) PART OF THE APPLICATION YOU ARE MOST PROUD OF
-------------------------------------------------
    - This app itself created with Vue. This is my second time creating an app using Vue. It's working. Thankfully.
    - The usage of the emitter to transfer data between sibling components, without passing it to the parent.
    - I am able to reuse code from my first app to this app!


6.) IMPROVEMENTS NEEDED
-----------------------
    - Proper validation is needed, especially those in calculations.
        - To some extent, validation that I applied to the prevents acceptance of null/undefined parameters. But this validation can be improved.

    - Unit testing need to be applied. I was not able to write the test.
    - UI and UX need improvement.
    - BUsiness decision on rounding off of figures. Rounding of off numbers causes bits of discrepancies in the resulting calculated value (results may vary by a few decimals to about 1 or 2).




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
