import { FC, useState, useEffect } from "react";

import styles from "./Hame.modules.scss"

const Home: FC = () => {
    const [products, setProducts] = useState([])

    return (
        <div className={styles.bg}>
            {products.map(product => )}
        </div>
    );
}

export default Home;