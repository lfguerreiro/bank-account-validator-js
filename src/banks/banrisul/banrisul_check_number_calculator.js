class BanrisulCheckNumberCalculator {
  
  calculate(accountNumber) {
    let numbers = accountNumber.split("");
    let sumSeq = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      let number = parseInt(numbers[i]);
      sumSeq += this.multiplyAccordingWeight(number, i);
    }

    return this.moduleEleven(sumSeq).toString();
  }

  multiplyAccordingWeight(number, index) {
    let weight = [3,2,4,7,6,5,4,3,2];
    return number * weight[index];
  }

  moduleEleven(sumSeq) {
    let module = sumSeq % 11;
    if (module === 0) {
      return 0;
    } else if (module == 1) {
      return 6;
    }
    return 11 - module;
  }
}

export default new BanrisulCheckNumberCalculator();