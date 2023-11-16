import axios from "axios";

export default class PostService {
    static async getAll() {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/postswww');
        return responce.data;
    }
}