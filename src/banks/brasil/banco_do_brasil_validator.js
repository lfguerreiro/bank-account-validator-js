import {GenericBankAccountValidator, CommonBankAccountValidator} from '../common';
import BancoDoBrasilCheckNumberCalculator from './banco_do_brasil_check_number_calculator'

class BancoDoBrasilValidator {

  agencyNumberIsValid(agencyNumber) {
    return agencyNumber.length == this.agencytNumberLength() && 
        CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
  }

  agencyCheckNumberIsValid(agencyCheckNumber) {
    return agencyCheckNumber === undefined || agencyCheckNumber === "" || this.agencyCheckNumberLength();
  }

  accountNumberIsValid(accountNumber) {
    let account = GenericBankAccountValidator.normalizeStartValue(accountNumber, this.accountNumberLength(), 0);
    return account.length == this.accountNumberLength() && 
      CommonBankAccountValidator.accountNumberIsValid(accountNumber);
  }

  accountCheckNumberIsValid(accountCheckNumber) {
    return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
  }

  agencyCheckNumberMatch(bankAccount) {
    if (!this.agencyCheckNumberIsValid) {
      let checkNumberCalculated = BancoDoBrasilCheckNumberCalculator.calculateAgency(bankAccount.agencyNumber);
      let checkNumberInformed = bankAccount.agencyCheckNumber.toUpperCase();
      if (checkNumberInformed === "0") {
        return checkNumberCalculated === checkNumberInformed || checkNumberCalculated === "X";
      }
      return checkNumberCalculated === checkNumberInformed;
    } else {
      return true;
    }
  }

  accountCheckNumberMatch(bankAccount) {
    let account = GenericBankAccountValidator.normalizeStartValue(bankAccount.accountNumber, 8, 0);
    let checkNumberCalculated = BancoDoBrasilCheckNumberCalculator.calculateAccount(account);
    return checkNumberCalculated === bankAccount.accountCheckNumber.toUpperCase();
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

  agencytNumberLength() { return 4; } 

  agencyCheckNumberLength() {return 1;}
  
  accountNumberLength() { return 8; }

}

export default BancoDoBrasilValidator;

