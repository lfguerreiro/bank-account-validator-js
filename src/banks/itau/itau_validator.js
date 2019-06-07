import {GenericBankAccountValidator, CommonBankAccountValidator} from '../common';
import ItauCheckNumberCalculator from './itau_check_number_calculator'

class ItauValidator {
  
  agencyNumberIsValid(agencyNumber) {
    return CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
  }

  agencyCheckNumberIsValid(agencyCheckNumber) {
    return agencyCheckNumber === undefined || agencyCheckNumber === "";
  }

  accountNumberIsValid(accountNumber) {
    return accountNumber.length == this.accountNumberLength() && 
      CommonBankAccountValidator.accountNumberIsValid(accountNumber);
  }

  accountCheckNumberIsValid(accountCheckNumber) {
    return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
  }

  agencyCheckNumberMatch(bankAccount) {
    return true;
  }
  
  accountCheckNumberMatch(bankAccount) {
    var checkNumberCalculated = ItauCheckNumberCalculator.calculate(bankAccount.agencyNumber, bankAccount.accountNumber);
    return checkNumberCalculated === bankAccount.accountCheckNumber;
  }

  agencyNumberMsgError() {
    return CommonBankAccountValidator.agencyNumberMsgError();
  }

  agencyCheckNumberMsgError() {
    return CommonBankAccountValidator.agencyCheckNumberMsgError();
  }

  accountNumberMsgError() {
    return CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength());
  }

  accountNumberLength() { return 5; }
} 

export default ItauValidator;