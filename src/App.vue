<template>
  <div class="container">
    <div class="main-rules">
      <Rules></Rules>
    </div>
    <div div="main-form">
      <h1>Car Loan Repayment Form</h1>
      <LoanRepaymentForm></LoanRepaymentForm>
    </div>

    <div class="main-table">
      <LoanCalculationsTable></LoanCalculationsTable>
    </div>
  </div>
</template>

<script>
import LoanRepaymentForm from "./components/LoanRepaymentForm.vue";
import LoanCalculationsTable from "./components/LoanCalculationsTable.vue";
import Rules from "./components/Rules.vue";

export default {
  name: "App",
  components: {
    Rules,
    LoanRepaymentForm,
    LoanCalculationsTable,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: space-between;

  & > * {
    width: 100%;
    border: 1px solid rgb(235, 235, 235);
    padding: 16px;
  }

  & > :nth-child(2) {
    margin: 0 8px;
  }
}
</style>
