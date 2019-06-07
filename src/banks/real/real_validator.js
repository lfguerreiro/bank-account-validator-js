import {GenericBankAccountValidator, CommonBankAccountValidator} from '../common';
import RealCheckNumberCalculator from './real_chek_number_calculate'

class RealValidator {
  
  agencyNumberIsValid(agencyNumber) {
    return agencyNumber.length == this.agencytNumberLength() && 
        CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
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
    var checkNumberCalculated = RealCheckNumberCalculator.calculate(bankAccount.agencyNumber, bankAccount.accountNumber);
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

  agencytNumberLength() { return 4;}

  accountNumberLength() { return 7; }
} 

export default RealValidator;