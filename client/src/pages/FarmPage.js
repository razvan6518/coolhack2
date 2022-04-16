import {useParams} from "react-router-dom";
import ProductList from "../components/products/ProductList";
import {useEffect, useState} from "react";

function FarmPage() {

    const {id} = useParams();
    const [products, setProducts] = useState([]);

    console.log("farm id ", id);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    useEffect(() => {
        fetch("http://localhost:5000/api/ranch/products/" + id, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log("result ", result);
                let prods = JSON.parse(result);
                console.log("products0 ", prods);
                setProducts(prods);
                console.log("farm page products ", products);
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