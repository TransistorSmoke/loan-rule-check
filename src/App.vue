<template>
  <h1>Car Loan Repayment Form</h1>
  <LoanRepaymentForm></LoanRepaymentForm>
  <LoanCalculationsTable></LoanCalculationsTable>
</template>

<script>
import LoanRepaymentForm from "./components/LoanRepaymentForm.vue";
import LoanCalculationsTable from "./components/LoanCalculationsTable.vue";

export default {
  name: "App",
  components: {
    LoanRepaymentForm,
    LoanCalculationsTable,
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
