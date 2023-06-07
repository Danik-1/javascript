import {FC} from "react"
import {useQuery} from "@tanstack/react-query";

import {ProductService} from "../../../services/product.service.ts"
import ProductItem from "../../ui/product-item/ProductItem.tsx";
import Layout from "../../ui/layout/Layout.tsx";

import styles from "./Home.module.scss"

const Home: FC = () => {
    const {data: products, isLoading} = useQuery(
        ['products'], () => ProductService.getProduct(),
        {
            select: ({products}) => products
        })

    return (
        <Layout>
            {isLoading
                ? <div className='text-blue-400 text-2xl'>Loading...</div>
                : products?.length
                    ? <div className={styles.wrapper}>
                        {products.map(product =>
                            <ProductItem product={product} key={product.id}/>
                        )}
                      </div>
                    : <div className='text-red-500'>Proucts not found</div>
            }
        </Layout>
    )
}

export default Home
