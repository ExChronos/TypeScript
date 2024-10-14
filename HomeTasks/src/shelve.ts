class Book{}

abstract class BooksRepository{
    createBook(book: Book){}
    getBook(id: string){}
    getBooks(){}
    updateBook(id: string){}
    deleteBook(id: string){}
}