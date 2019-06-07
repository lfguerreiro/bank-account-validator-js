class CaixaCheckNumberCalculator {
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
        let weight = [8,7,6,5,4,3,2,9,8,7,6,5,4,3,2];
        return number * weight[i];
    }

    accountModule(sumSeq) {
        let mult10 = parseInt(sumSeq * 10);
        let mod11 = parseInt(mult10 / 11);
        let result = Math.abs(parseInt(mod11 * 11 - mult10));
        if(result === 10) {
            return "0";
        } else {
            return result.toString();
        }
    }
}

export default new CaixaCheckNumberCalculator();