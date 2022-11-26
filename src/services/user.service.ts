import axios from "axios";

export const createUserWithEmailAndPassword = async (email: String, name: String, password: String) => {
    return await axios.post("https://61c42e42f1af4a0017d993b7.mockapi.io/Email", {
        email,
        name,
        password
    });
}