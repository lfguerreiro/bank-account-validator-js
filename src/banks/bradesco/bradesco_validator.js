import {GenericBankAccountValidator, CommonBankAccountValidator, } from '../common/index';
import BradescoCheckNumberCalculator from './bradesco_check_number_calculator';

class BradescoValidator {

  agencyNumberIsValid(agencyNumber) {
    return CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
  }

  agencyCheckNumberIsValid(agencyCheckNumber) {
    return agencyCheckNumber === undefined || agencyCheckNumber === "" || this.agencyCheckNumberLength();
  }

  accountNumberIsValid(accountNumber) {
    return accountNumber.length == this.accountNumberLength() && 
      CommonBankAccountValidator.accountNumberIsValid(accountNumber);
  }

  accountCheckNumberIsValid(accountCheckNumber) {
    return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
  }

  agencyCheckNumberMatch(bankAccount) {
    if (!this.agencyCheckNumberIsValid) {
      let checkNumberCalculated = BradescoCheckNumberCalculator.calculateAgency(bankAccount.agencyNumber);
      let checkNumberInformed = bankAccount.agencyCheckNumber.toUpperCase();
      if (checkNumberInformed === "0") {
        return checkNumberCalculated === checkNumberInformed || checkNumberCalculated === "P";
      }
      return checkNumberCalculated === checkNumberInformed;
    } else {
      return true;
    }
  }
  
  accountCheckNumberMatch(bankAccount) {
    let checkNumberCalculated = BradescoCheckNumberCalculator.calculateAccount(bankAccount.accountNumber);
    let checkNumberInformed = bankAccount.accountCheckNumber.toUpperCase();
    if (checkNumberInformed === "0") {
      return checkNumberCalculated === checkNumberInformed || checkNumberCalculated === "P";
    }
    return checkNumberCalculated === checkNumberInformed;
  }

  agencyNumberMsgError() {
    return CommonBankAccountValidator.agencyNumberMsgError();
  }

  agencyCheckNumberMsgError() {
    return CommonBankAccountValidator.agencyCheckNumberMsgError(this.agencyCheckNumberLength());
  }

  accountNumberMsgError() {
    return CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength());
  }

  agencyCheckNumberLength() {return 1;}

  accountNumberLength() { return 7; }

}

export default BradescoValidator;
