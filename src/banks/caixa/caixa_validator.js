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
    let account = GenericBankAccountValidator.normalizeStartValue(accountNumber, this.accountNumberLength(), 0);
    GenericBankAccountValidator.normalizeStartValue(account, this.accountNumberLength(), 0);
    return (account.length == this.accountNumberLength() &&
        CommonBankAccountValidator.accountNumberIsValid(accountNumber));
  }

  accountCheckNumberIsValid(accountCheckNumber) {
    return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
  }

  agencyCheckNumberMatch(bankAccount) {
    return true;
  }

  accountCheckNumberMatch(bankAccount) {
    let transformAccount = bankAccount.accountNumber.split('');
    const sizeAccount = this.accountNumberLength() - transformAccount.length;
    transformAccount.splice(3,0, ''.padStart(sizeAccount, '0'));
    
    let checkNumberCalculated = CaixaCheckNumberCalculator.calculate(bankAccount.agencyNumber, transformAccount.join(''));
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