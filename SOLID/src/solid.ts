class User {

}

class Student extends User {
    getLessons(){

    }
}

class Cart {
    refreshCart(){

    }
}

class Teacher extends User {
    setScore(){

    }
}

class Book{
    name: string;
    author: string;

    constructor(name: string, author: string) {
        this.author=author;
        this.name=name;
    }

    getInfo(): string {
        return `${this.name} - ${this.author}`;
    }
}

class ComicsBook extends Book {
    type: string;

    constructor(type: string, name: string, author: string) {
        super(name, author);
        this.type=type;
    }

    getInfo(): string {
        const bookInfo: string = super.getInfo();
        return `${bookInfo} - ${this.type}`
    }
}