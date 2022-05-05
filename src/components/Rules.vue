<template>
  <h1>Lender Rules</h1>

  <div class="container">
    <div class="content">
      <h3>Lender A</h3>
      <ul>
        <li>Monthly repayments only</li>
        <li>Repayment in arrears only</li>
        <li>5.5% p.a. lender interest rate</li>
        <li>$40 monthly fee</li>
        <li>2% p.a. broker fee</li>
      </ul>
    </div>

    <div class="content">
      <h3>Lender B</h3>
      <ul>
        <li>Monthly repayments only</li>
        <li>Repayment in arrears only</li>
        <li>6% p.a. lender interest rate</li>
        <li>1.7% p.a. broker fee</li>
        <li>$50 monthly fee</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rules",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}

.content {
  ul {
    text-align: left;
  }
}
</style>
