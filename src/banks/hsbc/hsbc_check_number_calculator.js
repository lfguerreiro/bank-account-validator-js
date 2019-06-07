class HSBCCheckNumberCalculator {
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
        let weight = [8,9,2,3,4,5,6,7,8,9];
        return number * weight[i];
    }

    accountModule(sumSeq) {
        let mod11 = parseInt(sumSeq % 11);
        if(mod11 === 10 || mod11 === 0) {
            return "0";
        } else {
            return mod11.toString();
        }
    }
}

export default new HSBCCheckNumberCalculator();