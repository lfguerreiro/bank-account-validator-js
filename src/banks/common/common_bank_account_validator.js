class CommonBankAccountValidator {
  agencyNumberIsValid(agencyNumber) {
    return /^(?!0000)([0-9]{4})$/.test(agencyNumber);
  };

  agencyCheckNumberIsValid(agencyCheckNumber) {
    return /^[a-zA-Z0-9]{0,1}$/.test(agencyCheckNumber);
  };

  accountNumberIsValid(accountNumber) {
    return /^[0-9]{1,12}$/.test(accountNumber) && parseInt(accountNumber) > 0;
  };

  accountCheckNumberIsValid(accountCheckNumber) {
    return /^[a-zA-Z0-9]{1}$/.test(accountCheckNumber);
  };

  agencyNumberMsgError(length) {
    if (length === undefined) {
      length = this.agencyNumberLength();
    }
    return "A agência deve conter " + length + " números. Complete com zeros a esquerda se necessário.";
  };

  agencyCheckNumberMsgError(length) {
    if (length === undefined || length === 0) {
      return "O dígito da agência deve ser vazio";
    } else if (length === 1) {
      return "O dígito da agência deve conter 1 dígito";
    } else {
      return "O dígito da agência deve conter " + length + " números. Complete com zeros a esquerda se necessário.";  
    }
  };

  accountNumberMsgError(length) {
    return "A conta de conter " + length + " números";
  };

  agencyNumberLength() { return 4; }
}

export default new CommonBankAccountValidator();
