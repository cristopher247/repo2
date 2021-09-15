import axios from "axios";

export class ProductService {

    // baseUrl = "http://localhost:8080/api/products/";
    baseUrl = "https://topher-rest-api.herokuapp.com/api/products/";
    //https://topher-rest-app.herokuapp.com/

    create(product) {
        return axios.post(this.baseUrl + "product/", product).then(res => res.data);
    }

    readAll() {
        return axios.get(this.baseUrl).then(res => res.data);
    }

    update(product) {
        return axios.put(this.baseUrl + "product/" + product._id, product).then(res => res.data);
    }

    delete(id) {
        return axios.delete(this.baseUrl + "product/" + id).then(res => res.data);
    }
}