class ItauCheckNumberCalculator {

  calculate(agencyNumber, accountNumber) {
    let numbers = (agencyNumber+accountNumber).split("");
    let sumSeq = 0;
    let sequence = 0;
    for (let i = 0; i < numbers.length; i++) {
      let number = parseInt(numbers[i]);
      sequence = this.multiplyAccordingParity(number, i);
      sequence = this.adjustAccordingLength(sequence);
      sumSeq += sequence;
    }
    return this.module(sumSeq);
  }

  multiplyAccordingParity(number, index) {
    return number * (index % 2 === 0 ? 2 : 1);
  }

  adjustAccordingLength(sequence) {
    if(sequence > 9) {
      let numbers = sequence.toString().split("");
      sequence = 0;
      for (let i = 0; i < numbers.length; i++) {
        sequence += parseInt(numbers[i]);
      }
    }
    return sequence;
  }

  module(sumSeq) {
    let mod = sumSeq % 10;
    if(mod === 0) {
      return "0";
    } else {
      return (10 - mod).toString();
    }
  }

}

export default new ItauCheckNumberCalculator();