class BradescoCheckNumberCalculator {
  // Account validation
  calculateAccount(accountNumber) {
    let numbers = accountNumber.split("");
    let sumSeq = 0;
    for (let i = 0; i < numbers.length; i++) {
      let number = parseInt(numbers[i]);
      sumSeq += this.multiplyAccordingWeight(number, i);
    }
    return this.accountModule(sumSeq);
  }

  multiplyAccordingWeight(number, i) {
    let weight = [2,7,6,5,4,3,2];
    return number * weight[i];
  }

  accountModule(sumSeq) {
    let mod11 = sumSeq % 11;
    if(mod11 === 0) {
      return "0";
    } else {
      if (mod11 === 1) {
        return "P";
      } else {
        return (11 - mod11).toString();
      }
    }
  }

  // Agency validation
  calculateAgency(agencyNumber) {
    let numbers = agencyNumber.split("");
    let sumSeq = 0;
    for (let i = 0; i < numbers.length; i++) {
      seq = 5 - i;
      sumSeq += (parseInt(numbers[i]) * seq);
    }
    return this.agencyMod11ule(sumSeq);
  }

  agencyModule(sumSeq) {
    let result = 11 - (sumSeq % 11);
    if(result === 10) {
      return "P";
    } else {
      if (result === 11) {
        return "0";
      } else {
        return result.toString();
      }
    }
  }

}

export default new BradescoCheckNumberCalculator();