<template>
  <div class="loan-form">
    <form @submit.prevent="onSubmit($event)">
      <div class="group-rule">
        <label for="rule">Select Lender Rule:</label><br />
        <select v-model="rule" name="rule" id="rules">
          <option value="A" selected>A</option>
          <option value="B">B</option>
        </select>
      </div>

      <div class="group-loan-amount">
        <label for="loan-amount">Loan Amount ($)</label><br />
        <input
          v-model="loanAmount"
          placeholder="Loan Amount"
          type="string"
          name="loan-amount"
          @keydown="setNumericOnly($event)"
        />
        <p class="error-message" v-if="this.loanFormErrors.isInvalidLoanAmount">
          Please enter loan amount
        </p>
      </div>

      <div class="group-loan-term-year">
        <label for="loan-term-year">Loan Term Years</label><br />
        <input
          v-model="loanTermYears"
          placeholder="Number of Years"
          type="string"
          name="loan-term-year"
          @keydown="setNumericOnly($event)"
        />
        <p
          class="error-message"
          v-if="this.loanFormErrors.isInvalidLoanTermYears"
        >
          Please enter loan term years
        </p>
      </div>

      <button class="btn-submit" type="submit">SUBMIT</button>
    </form>
  </div>
</template>

<script>
import HelperService from "@/services/HelperService";

export default {
  name: "LoanRepaymentForm",
  data() {
    return {
      rule: "A",
      loanAmount: null,
      loanTermYears: null,
      PMT: null,
      monthlyRepayment: null,
      loanFormErrors: {
        isInvalidLoanAmount: false,
        isInvalidLoanTermYears: false,
      },
    };
  },
  methods: {
    setNumericOnly(event) {
      /*
       *   The method prevents the following actions when inputting on the PRICE field:
       *     - input of non-numeric characters EXCEPT for those listed in the array of allowed keys
       *     - input of the zero or fullstop character as a first character in the field
       */

      const allowedKeys = [
        "Backspace",
        "Enter",
        "ArrowRight",
        "ArrowLeft",
        ".",
        "Delete",
        "Meta",
        "v",
        "Tab",
      ];

      const patternNumbers = /^\d+$/;

      if (
        (!patternNumbers.test(event.key) &&
          allowedKeys.indexOf(event.key) === -1) ||
        ((event.key === "0" || event.key === ".") &&
          (event.target.value.length === 0 ||
            event.target.selectionStart === 0))
      ) {
        event.preventDefault();
      }
    },
    onSubmit(event) {
      if (this.loanAmount && this.loanTermYears) {
        const valuePMT = HelperService.getPmtValue(
          this.rule,
          this.loanTermYears,
          this.loanAmount
        );

        this.monthlyRepayment = HelperService.getMonthlyRepayment(
          this.rule,
          valuePMT,
          this.loanTermYears
        );

        event.target.reset();
        event.target.blur();

        this.emitter.emit("emit-repayment", {
          amount: this.loanAmount,
          paymentPeriod: this.loanTermYears,
          amountRepayment: this.monthlyRepayment,
          rule: this.rule,
        });
      }

      // Set field error flags
      if (!this.loanAmount) {
        this.loanFormErrors.isInvalidLoanAmount = true;
      } else {
        this.loanFormErrors.isInvalidLoanAmount = false;
      }

      if (!this.loanTermYears) {
        this.loanFormErrors.isInvalidLoanTermYears = true;
      } else {
        this.loanFormErrors.isInvalidLoanTermYears = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loan-form {
  border: 1px solid rgb(224, 224, 224);
  padding: 16px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .group-rule,
  .group-loan-amount,
  .group-loan-term-year {
    text-align: left;
    margin-bottom: 16px;
  }

  .group-rule select,
  .group-loan-amount input,
  .group-loan-term-year input {
    width: 100%;
    padding: 6px 0;
  }

  .group-loan-amount input,
  .group-loan-term-year input {
    padding-left: 6px;
  }

  .error-message {
    font-size: 12px;
    color: rgb(217, 43, 43);
    margin: 0;
  }

  form {
    & > :last-child {
      margin-bottom: 0;
    }

    label {
      font-weight: bold;
    }

    .btn-submit {
      padding: 12px;
      background-color: rgb(211, 255, 211);
      color: #2c3e50;
      transition: background-color 0.2s;
      width: 100%;
      border: none;
      margin-top: 24px;
      border-radius: 5px;

      &:hover {
        background-color: rgb(141, 237, 141);
        transition: background-color 0.2s;
      }
    }
  }
}
</style>
