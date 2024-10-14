class User {
    name: string
    constructor(userName: string) {
        this.name=userName
    }
    get_info(): void {
        console.log(`Имя: ${this.name}`)
    }
}

class Employee extends User {
    company: string
    constructor(userName: string, empCompany: string) {
        super(userName)
        this.company=empCompany
    }

    get_info(): void {
        super.get_info()
        console.log(`Работает в компании ${this.company}`)
    }
}
