import ItauValidator from './banks/itau/itau_validator';
import BradescoValidator from './banks/bradesco/bradesco_validator';
import BancoDoBrasilValidator from './banks/brasil/banco_do_brasil_validator';
import SantanderValidator from './banks/santander/santander_validator';
import CitibankValidator from './banks/citibank/citibank_validator';
import HSBCValidator from './banks/hsbc/hsbc_validator';
import BanrisulValidator from './banks/banrisul/banrisul_validator';
import CaixaValidador from './banks/caixa/caixa_validator';
import RealValidator from './banks/real/real_validator';

import {GenericBankAccountValidator} from './banks/common/index'

import {BANKS} from './config'

export default class BankAccount {
  constructor() {
      this.validators = {
        [BANKS.BRASIL]: new BancoDoBrasilValidator(),
        [BANKS.BRADESCO]: new BradescoValidator(),
        [BANKS.ITAU]: new ItauValidator(),
        [BANKS.SANTANDER]: new SantanderValidator(),
        [BANKS.CITIBANK]: new CitibankValidator(),
        [BANKS.HSBC]: new HSBCValidator(),
        [BANKS.BANRISUL]: new BanrisulValidator(),
        [BANKS.CAIXA]: new CaixaValidador(),
        [BANKS.REAL]: new RealValidator()
      };
  }

  validator(bankNumber) {
    if (this.validators[bankNumber]) {
      return this.validators[bankNumber];
    } else {
      return GenericBankAccountValidator;
    }
  }

  validate(params) {
    
    return new Promise((resolve, reject) => {
      let validator = this.validator(params.bankNumber);
      let errors = [];

      if(!GenericBankAccountValidator.bankNumberIsValid(params.bankNumber)){
        errors.push({ description: "Banco inválido", code: "INVALID_BANK_NUMBER" });
      }

      if(!validator.agencyNumberIsValid(params.agencyNumber)){
        errors.push({ description: validator.agencyNumberMsgError(), code: "INVALID_AGENCY_NUMBER" });
      }

      if(!validator.agencyCheckNumberIsValid(params.agencyCheckNumber)){
        errors.push({ description: validator.agencyCheckNumberMsgError(), code: "INVALID_AGENCY_CHECK_NUMBER" });
      }

      if(!validator.accountNumberIsValid(params.accountNumber)){
        errors.push({ description: validator.accountNumberMsgError(), code: "INVALID_ACCOUNT_NUMBER" });
      }

      if(!validator.accountCheckNumberIsValid(params.accountCheckNumber)){
        errors.push({ description: "Dígito da conta corrente inválido", code: "INVALID_ACCOUNT_CHECK_NUMBER" });
      }

      if(validator.agencyNumberIsValid(params.agencyNumber) && validator.agencyCheckNumberIsValid(params.agencyCheckNumber)){
        if(!validator.agencyCheckNumberMatch(params)) {
          errors.push({ description: "Dígito da agência não corresponde ao número da agência preenchido", code: "AGENCY_CHECK_NUMBER_DONT_MATCH" });
        }
      }

      if(validator.accountNumberIsValid(params.accountNumber) && validator.accountCheckNumberIsValid(params.accountCheckNumber)){
        if(!validator.accountCheckNumberMatch(params)) {
          errors.push({ description: "Dígito da conta não corresponde ao número da conta/agência preenchido", code: "ACCOUNT_CHECK_NUMBER_DONT_MATCH" });
        }
      }

      if(errors.length === 0) {
        resolve();
      } else {
        reject({ errors: errors });
      }
    });
    

  }
}

