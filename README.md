# loan-rule-check

A smal VueJS app to calculate monthly repayment based on rules.

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
