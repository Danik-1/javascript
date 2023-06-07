import axios from "axios";
import {IProductsResponse} from "../types/product.interface.ts";

axios.defaults.baseURL = 'https://dummyjson.com'
export const ProductService = {
    async getProduct() {
        const response =
            await axios.get<IProductsResponse>('/products',
                {
                    params: {
                        limit: 10
                    }
                })
        return response.data
    }
}
