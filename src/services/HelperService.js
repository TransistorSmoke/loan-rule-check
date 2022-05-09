import PMT from "formula-pmt";

/*
 *   Distinct rules for Lender A and lender B, where:
 *     - Lender A has 5.5% lender interest rate p.a., $40 monthly fee and 2% broker fee p.a.
 *     - Lender A has 6% lender interest rate p.a., $45 monthly fee and 1.7% broker fee p.a.
 */

const lenderRuleA = {
  interestRatePerAnnum: 0.055,
  monthlyFee: 40,
  brokerFeePerAnnum: 0.02,
};

const lenderRuleB = {
  interestRatePerAnnum: 0.06,
  monthlyFee: 50,
  brokerFeePerAnnum: 0.017,
};

export default {
  getPmtValue(rule, paymentPeriods, principalValue) {
    let interestRate = null;

    if (rule === "A") {
      interestRate = lenderRuleA.interestRatePerAnnum;
    } else if (rule === "B") {
      interestRate = lenderRuleB.interestRatePerAnnum;
    }

    return PMT(interestRate / 12, paymentPeriods * 12, principalValue);
  },

  getMonthlyRepayment(ruleType, PMT, paymentPeriods) {
    let monthlyRepayment = null;

    if (ruleType && ruleType === "A" && PMT) {
      const miscA = 1 + lenderRuleA.brokerFeePerAnnum / (paymentPeriods * 12);
      console.log("miscA: ", miscA);
      console.log("PMT A: ", PMT);
      monthlyRepayment =
        (PMT - lenderRuleA.monthlyFee) *
        // eslint-disable-next-line prettier/prettier
        (1 + (lenderRuleA.brokerFeePerAnnum / (paymentPeriods * 12)));
    } else if (ruleType && ruleType === "B" && PMT) {
      const misc =
        1 +
        lenderRuleB.brokerFeePerAnnum / (paymentPeriods * 12) -
        lenderRuleB.monthlyFee;
      console.log("PMT B: ", PMT);
      console.log("misc B: ", misc);

      monthlyRepayment =
        PMT * (1 + lenderRuleB.brokerFeePerAnnum / (paymentPeriods * 12)) -
        lenderRuleB.monthlyFee;
    }

    return monthlyRepayment;
  },
};
