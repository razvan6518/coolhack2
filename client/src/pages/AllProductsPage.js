import ProductList from "../components/products/ProductList";
import {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {USER} from "../store";
import Header from "../components/layout/Header";

function AllProductsPage() {

    const [user] = useAtom(USER);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/product/all", requestOptions)
            .then(response => response.text())
            .then(result => {
                setProducts(JSON.parse(result));
            })
            .catch(error => console.log('error', error));
    }, []);

    return (<div>
            <Header/>
            <ProductList products={products}/>
        </div>
    )
}

export default AllProductsPage;