class RealCheckNumberCalculator {
    calculate(agencyNumber, accountNumber) {
        let numbers = (agencyNumber+accountNumber).split('');
        let sumSeq = 0;

        for (let i = 0; i < numbers.length; i++) {
            let number = parseInt(numbers[i]);
            sumSeq += this.multiplyAccordingWeight(number, i);
        }
        return this.accountModule(sumSeq);
    }

    multiplyAccordingWeight(number, i) {
        let weight = [8,1,4,7,2,2,5,9,3,9,5];
        return number * weight[i];
    }

    accountModule(sumSeq) {
        let mod11 = parseInt(sumSeq % 11);
        let result = Math.abs(parseInt(11 - mod11));
        if(result === 0 || result === 1) {
            return "0";
        } else {
            return result.toString();
        }
    }
}

export default new RealCheckNumberCalculator();