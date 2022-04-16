import {useParams} from "react-router-dom";
import FarmItem from "../components/farms/FarmItem";
import {useEffect, useState} from "react";
import ProductList from "../components/products/ProductList";

function FarmPage() {

    const { id, name, description, coverPhoto } = useParams();
    const [products, setProducts] = useState();

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        fetch("http://localhost:5000/api/ranch/products/%22+id", requestOptions)
            .then(response => response.text())
            .then(result => {
                let prods = JSON.parse(result);
                setProducts(prods);
            })
            .catch(error => console.log('error', error));
    }, [])



    return (
        <>
            <ProductList products={products}/>
        </>
    );
}

export default FarmPage;