"use strict";
const new_book = {
    name: 'Над пропастью во ржи',
    isbn: '123455321'
};
const container = document.getElementById('content');
if (container) {
    container.textContent = `Название книги: ${new_book.name}, ISBN: ${new_book.isbn}`;
}
