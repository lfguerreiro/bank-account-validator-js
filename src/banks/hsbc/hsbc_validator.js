import {GenericBankAccountValidator, CommonBankAccountValidator} from '../common';
import HSBCCheckNumberCalculator from './hsbc_check_number_calculator'

class HSBCValidator {
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
    var checkNumberCalculated = HSBCCheckNumberCalculator.calculate(bankAccount.agencyNumber, bankAccount.accountNumber);
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

  accountNumberLength() { return 6; }
}

export default HSBCValidator;
