<template>
  <h1>Loan Repayment Summary</h1>
  <div class="tbl-container">
    <table>
      <thead>
        <tr>
          <th colspan="2" class="rule">
            LENDER RULE
            <span class="rule-type">{{ this.monthlyRepaymentData?.rule }}</span>
          </th>
          <th>Repayment ($)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Loan Amount ($)</td>
          <td>{{ this.monthlyRepaymentData?.amount }}</td>
          <td rowspan="3" class="amt-repayment">
            {{ this.monthlyRepaymentData?.amountRepayment.toFixed(2) }}
          </td>
        </tr>
        <tr>
          <td>Loan Term (Years)</td>
          <td>{{ this.monthlyRepaymentData?.paymentPeriod }}</td>
        </tr>
        <tr>
          <td>Loan Amount (Months)</td>
          <td>
            {{
              this.monthlyRepaymentData?.paymentPeriod
                ? this.monthlyRepaymentData?.paymentPeriod * 12
                : ""
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "LoanCalculationsTable",
  data() {
    return {
      monthlyRepaymentData: null,
    };
  },
  mounted() {
    this.emitter.on("emit-repayment", (repaymentData) => {
      this.monthlyRepaymentData = repaymentData;
    });
  },
};
</script>
<style lang="scss" scoped>
.tbl-container {
  font-size: 0.85rem;
  font-weight: bold;
  max-width: 90%;
  margin: 64px auto 0 auto;

  table {
    border-collapse: collapse;
    margin: 0 auto;
  }

  tr,
  th,
  td {
    border: 1px solid #ccc;
    width: 50%;
    padding: 4px 8px;
  }

  tr td:first-child {
    text-align: right;
  }

  td:first-child,
  td:nth-child(2) {
    width: 30%;
  }

  .rule {
    font-size: 1rem;
    background-color: rgb(238, 238, 238);

    &-type {
      color: rgb(232, 70, 70);
      text-decoration: underline;
    }
  }
  .amt-repayment {
    color: rgb(232, 70, 70);
    font-size: 1rem;
  }
}
</style>
