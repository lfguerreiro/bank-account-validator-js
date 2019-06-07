class BancoDoBrasilCheckNumberCalculator {
  
  calculateAccount(accountNumber) {
    let numbers = accountNumber.split("");
    let sumSeq = 0;
    let sequence = 0;
    for (let i = 0; i < numbers.length; i++) {
      sequence = 9 - i;
      sumSeq += (parseInt(numbers[i]) * sequence);
    }
    return this.module(sumSeq);
  }

  // Agency validation
  calculateAgency(agencyNumber) {
    let numbers = agencyNumber.split("");
    let sumSeq = 0;
    let sequence = 0;
    for (let i = 0; i < numbers.length; i++) {
      sequence = 5 - i;
      sumSeq += (parseInt(numbers[i]) * sequence);
    }
    return this.module(sumSeq);
  }

  module(sumSeq) {
    let result = 11 - (sumSeq % 11);
    if(result === 10) {
      return "X";
    } else {
      if (result === 11) {
        return "0";
      } else {
        return result.toString();
      }
    }
  }

}

export default new BancoDoBrasilCheckNumberCalculator();