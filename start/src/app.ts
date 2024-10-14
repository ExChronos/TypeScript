interface Book{
    name: string;
    isbn: string;
}

const new_book: Book = {
    name: 'Над пропастью во ржи',
    isbn: '123455321'
};

const container = document.getElementById('content');

if(container){
    container.textContent = `Название книги: ${new_book.name}, ISBN: ${new_book.isbn}`;
}