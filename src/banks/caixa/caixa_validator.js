import {GenericBankAccountValidator, CommonBankAccountValidator, } from '../common/index';
import CaixaCheckNumberCalculator from './caixa_check_number_calculator';

class CaixaValidador {
  agencyNumberIsValid(agencyNumber) {
    return CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
  }

  agencyCheckNumberIsValid(agencyCheckNumber) {
    return agencyCheckNumber === undefined || agencyCheckNumber === "";
  }

  accountNumberIsValid(accountNumber) {
    return (accountNumber.length == this.accountNumberLength() &&
        CommonBankAccountValidator.accountNumberIsValid(accountNumber));
  }

  accountCheckNumberIsValid(accountCheckNumber) {
    return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
  }

  agencyCheckNumberMatch(bankAccount) {
    return true;
  }

  accountCheckNumberMatch(bankAccount) {
    var checkNumberCalculated = CaixaCheckNumberCalculator.calculate(bankAccount.agencyNumber, bankAccount.accountNumber);
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

  accountNumberLength() {
    return 11;
  }
}

export default CaixaValidador;