interface printed_item {
    name: string;
    isbn: string;
    pagesCount: number;
    hardCover: boolean
}

class Book implements printed_item {
    name: string;
    isbn: string;
    pagesCount: number;
    hardCover = true
}

class Comics implements printed_item {
    name: string;
    isbn: string;
    pagesCount: number;
    hardCover: false;
}

type colorType = string | number;

let primaryColor: colorType = 'red';
let secondaryColor: colorType = 0x8e8e8e;