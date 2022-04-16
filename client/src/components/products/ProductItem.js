import {useNavigate} from "react-router-dom";
import classes from "../farms/FarmItem.module.css";
import ApproveFarmButton from "../buttons/ApproveFarmButton";
import RefuseButton from "../buttons/RefuseButton";
import ToFavoriteButton from "../buttons/ToFavoriteButton";

function ProductItem(props) {
    const navigate = useNavigate();
    return (
        <div className={classes.cardWidth + " " + "card large"}>
            <div  className={classes.image + " " + "card-image waves-effect waves-block waves-light"} onClick={() => navigate(`/`)}>
                <img className="activator" src={props.product.coverPhoto} alt={props.product.name}/>
            </div>
            <div className="card-content" onClick={() => navigate(`/farm/${props.product.id}`)}>
                <span className="card-title activator grey-text text-darken-4">{props.product.name}</span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.product.name}<i
                    className="material-icons right">close</i></span>
                <address>{props.product.name}</address>
                <p>{props.farm.description}</p>
            </div>
            <div >
                {props.approve != null &&
                    <ApproveFarmButton eventId={props.farm.id}
                                       removeEventFromLoadedEvents={() => {}}
                    />
                }
                {props.unapprove != null &&
                    <RefuseButton eventId={props.farm.id}
                                  removeEventFromLoadedEvents={() => {}}
                    />
                }
                {props.toFavorites != null &&
                    <ToFavoriteButton eventId={props.farm.id}/>
                }
            </div>
        </div>
    );
}

export default ProductItem;