<template>
  <h1>Car Loan Repayment Form</h1>
  <LoanRepaymentForm></LoanRepaymentForm>
</template>

<script>
import LoanRepaymentForm from "./components/LoanRepaymentForm.vue";

export default {
  name: "App",
  components: {
    LoanRepaymentForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
