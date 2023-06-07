export const ProductService = {
    async getProduct() {
        const response = await fetch("");
        return response.json();
    }
}