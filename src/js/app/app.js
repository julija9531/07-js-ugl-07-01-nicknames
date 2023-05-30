export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    // Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
    let res = this.username.match(/[^a-zA-Z0-9-_]/);
    if (res !== null) {
      console.log(res);
      return false;
    }

    //Имя не должно содержать подряд более трёх цифр:
    res = this.username.match(/([0-9][0-9][0-9]+)/);
    if (res !== null) {
      console.log(res);
      return false;
    }
    //Имя не должно начинаться цифрами, символами подчёркивания или тире.
    res = this.username.match(/^[0-9-_]/);
    if (res !== null) {
      console.log(res);
      return false;
    }

    //Имя не должно заканчиваться цифрами, символами подчёркивания или тире.
    res = this.username.match(/[0-9-_]$/);
    if (res !== null) {
      console.log(res);
      return false;
    }

    return true;
  }
}
