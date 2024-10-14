"use strict";
class User {
}
class Student extends User {
    getLessons() {
    }
}
class Cart {
    refreshCart() {
    }
}
class Teacher extends User {
    setScore() {
    }
}
class Book {
    constructor(name, author) {
        this.author = author;
        this.name = name;
    }
    getInfo() {
        return `${this.name} - ${this.author}`;
    }
}
class ComicsBook extends Book {
    constructor(type, name, author) {
        super(name, author);
        this.type = type;
    }
    getInfo() {
        const bookInfo = super.getInfo();
        return `${bookInfo} - ${this.type}`;
    }
}
