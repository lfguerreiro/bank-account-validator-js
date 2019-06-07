import  {GenericBankAccountValidator}  from "../common";

class CitiBankCheckNumberCalculator {

    calculate(accountNumber) {
        let account = GenericBankAccountValidator.normalizeStartValue(accountNumber, 10, 0);

        let numbers = (account).split('');
        let sumSeq = 0;

        for (let i = 0; i < numbers.length; i++) {
            let number = parseInt(numbers[i]);
            sumSeq += this.mutiplyAccordingWeight(number, i);
        }
        return this.accountModule(sumSeq);
    }

    mutiplyAccordingWeight(number, i) {
        let weight = [11,10,9,8,7,6,5,4,3,2];
        return number * weight[i];
    }

    accountModule(sumSeq) {
        let mod11 = parseInt(sumSeq % 11);
        let result = Math.abs(parseInt(11 - mod11));
        if(result === 0 && result === 1) {
            return "0";
        } else {
            return result.toString();
        }
    }

}

export default new CitiBankCheckNumberCalculator();