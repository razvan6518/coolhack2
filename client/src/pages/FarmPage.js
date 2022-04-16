import {useParams} from "react-router-dom";
import ProductList from "../components/products/ProductList";
import {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {USER} from "../store";
import classes from "./AllFarmsPage.module.css";
import M from "materialize-css";
import options from "materialize-css";

function FarmPage() {

    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [user] = useAtom(USER);

    const [prodName, setProdName] = useState("");
    const [prodPrice, setProdPrice] = useState("");
    const [prodDesc, setProdDesc] = useState("");

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

    function handleModal(event) {

        const elems = document.querySelectorAll('.modal');
        const instances = M.Modal.init(elems, options);

    }

    function handleProdCreate() {
        //todo: send farm to server
    }

    return (
        <section className={classes.section}>
            <ProductList products={products}/>
            { Object.keys(user).length !== 0 && user.roles[0] === "PRODUCER" &&
                <>
                    <a className={classes.addButton + " " + "btn-floating btn-large waves-effect waves-light red modal-trigger"} href="#modal1" onClick={handleModal}><i className="material-icons">add</i></a>
                    <div id="modal1" className="modal">

                        <div className={classes.modalForm}>
                            <h4>Add a product</h4><br></br>
                            <label className="active" htmlFor="productName">Name</label>
                            <input id="productName" type="text" className="validate" onChange={(event) => {setProdName(event.target.value)}}/>

                            <label className="active" htmlFor="productDesc">Address</label>
                            <input id="productDesc" type="text" className="validate" onChange={(event) => {setProdDesc(event.target.value)}}/>

                            <label className="active" htmlFor="productPrice">Description</label>
                            <input id="productPrice" type="text" className="validate" onChange={(event) => {setProdPrice(event.target.value)}}/>

                        </div>

                        <div className="modal-footer" >
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={handleProdCreate}>Proceed</a>
                        </div>
                    </div>
                </>
            }
        </section>
    );
}

export default FarmPage;