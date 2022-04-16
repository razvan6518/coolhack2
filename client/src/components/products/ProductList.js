import classes from "../farms/FarmList.module.css";
import FarmItem from "../farms/FarmItem";
import ProductItem from "./ProductItem";

function ProductList(props) {

    return (
        <div className={classes.list}>
            <ul>
                {props.products.map(product => <ProductItem key={product.id} product={product} toFavorites={true}/>)}
            </ul>
        </div>
    )
}

export default ProductList;