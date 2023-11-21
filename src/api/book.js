import axios from "axios";

class BookService {
    async getBooks() {
        const { data } = await axios.get('/livros');
        return data;
    }
}

export default new BookService();