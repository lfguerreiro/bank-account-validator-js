import {GenericBankAccountValidator, CommonBankAccountValidator} from '../common';
import CitiBankCheckNumberCalculator from './citibank_check_number_calculator';

class CitibankValidator {
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
    var checkNumberCalculated = CitiBankCheckNumberCalculator.calculate(bankAccount.accountNumber);
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

  accountNumberLength() { return 10; }
}

export default CitibankValidator;