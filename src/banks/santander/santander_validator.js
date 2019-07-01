import {GenericBankAccountValidator, CommonBankAccountValidator} from '../common';
import SantanderCheckNumberCalculator from './santander_check_number_calculate';

export default class SantanderValidator {
  
  agencyNumberIsValid(agencyNumber) {
    return agencyNumber.length == this.agencytNumberLength() && 
        CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
  }

  agencyCheckNumberIsValid(agencyCheckNumber) {
    return agencyCheckNumber === undefined || agencyCheckNumber === "" || this.agencyCheckNumberLength();
  }

  accountNumberIsValid(accountNumber) {
    var validAccount = SantanderCheckNumberCalculator.validAccount(accountNumber);
    return accountNumber.length == this.accountNumberLength() && 
      CommonBankAccountValidator.accountNumberIsValid(accountNumber) && validAccount;
  }

  accountCheckNumberIsValid(accountCheckNumber) {
    return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
  }

  agencyCheckNumberMatch(bankAccount) {
    return true;
  }
  
  accountCheckNumberMatch(bankAccount) {
    let checkNumberCalculated = SantanderCheckNumberCalculator.calculate(bankAccount.agencyNumber, bankAccount.accountNumber);
    return checkNumberCalculated === bankAccount.accountCheckNumber;
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

  agencytNumberLength() { return 4;}
  
  agencyCheckNumberLength() {return 1;}

  accountNumberLength() { return 8; }

}

