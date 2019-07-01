import  {GenericBankAccountValidator}  from "../common";

class SantanderCheckNumberCalculator {
    calculate(agencyNumber, accountNumber) {
        let account = GenericBankAccountValidator.normalizeStartValue(accountNumber, 10, 0);
        let numbers = (agencyNumber+account).split('');
        let sumSeq = 0;
        let getLastNumber = 0;
        
        for (let i = 0; i < numbers.length; i++) {
            let number = parseInt(numbers[i]);
            let count = (this.multiplyAccordingWeight(number, i)).toString(); 
            let size = count.length === 1 ? 0 : 1; 
            getLastNumber = count.substring(size)
            sumSeq += parseInt(getLastNumber);
        }
        return this.accountModule(sumSeq);
    }

    multiplyAccordingWeight(number, i) {
        let weight = [9,7,3,1,0,0,9,7,1,3,1,9,7,3];
        return number * weight[i];
    }

    accountModule(sumSeq) {
        let sub1 = (sumSeq).toString().substring(1);
        if(sub1 === "0") {
            return "0";
        } else {
            return (10 - sub1).toString();
        }
    }

    validAccount(accountNumber) {
        const validAccountTypes = [
            '01', '02','03', '05', '07', '09', '13', '27', '35',
            '37', '43', '45', '46', '48', '50', '53', '60', '92'
        ];

        var accountType = (accountNumber).toString().substring(0,2)

        return validAccountTypes.indexOf(accountType) > -1;
    }
}

export default new SantanderCheckNumberCalculator();