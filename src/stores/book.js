import { defineStore } from "pinia";
import bookService from '@/api/book.js'

export const useBookStore = defineStore('book', {
    state: () => {
        return {
            books: []
        }
    },
    actions: {
        async getBooks() {
            const data = await bookService.getBooks();
            this.books = data;
        }
    }
})