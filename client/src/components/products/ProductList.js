import classes from "../farms/FarmList.module.css";
import FarmItem from "../farms/FarmItem";
import ProductItem from "./ProductItem";

function ProductList(props) {
    console.log("products ", props.products);
    return (
        <div className={classes.list}>
            <div >
                {props.products.map(product => <ProductItem key={product.id} product={product} toFavorites={true}/>)}
            </div>
        </div>
    )
}

export default ProductList;