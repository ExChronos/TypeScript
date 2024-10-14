"use strict";
class User {
    static generatePassword() {
        return Math.random().toString(36).substr(2);
    }
}
User.MAXLEVEL = 80;
console.log(User.generatePassword());
