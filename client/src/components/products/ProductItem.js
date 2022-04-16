import {useNavigate} from "react-router-dom";
import classes from "./ProductItem.module.css";
import ApproveFarmButton from "../buttons/ApproveFarmButton";
import RefuseButton from "../buttons/RefuseButton";
import ToFavoriteButton from "../buttons/ToFavoriteButton";

const photoURL = "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA2dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjAl/MkYwOCUyRjAxJTJGMTIxMTkwNl8xMjEx/OTA2X2ZydWN0ZS1leG90aWNlLXBlcGVu/ZS1hbmFuYXMtc3RydWd1cmktR2V0dHlJ/bWFnZXMtOTk1NTE4NTQ2LmpwZyZ3PTc4/MCZoPTQ0MCZoYXNoPTdkZDM1ZDQ4ZTEzMmZjMGNiMmY1YjQ0MzVjODdlN2Vk.thumb.jpg";
function ProductItem(props) {
    // test
    props.product.coverPhoto = photoURL;
    const navigate = useNavigate();
    return (
        <div className={classes.cardWidth + " " + "card large"}>
            <div  className={classes.image + " " + "card-image waves-effect waves-block waves-light"}>
                <img className="activator" src={props.product.coverPhoto} alt={props.product.productName}/>
            </div>
            <div className="card-content" onClick={() => navigate(`/farm/${props.product.id}`)}>
                <span className="card-title activator grey-text text-darken-4">{props.product.productName}</span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.product.productName}<i
                    className="material-icons right">close</i></span>
                <p>{props.product.description}</p>
            </div>
            <div >
                {props.approve != null &&
                    <ApproveFarmButton eventId={props.product.id}
                                       removeEventFromLoadedEvents={() => {}}
                    />
                }
                {props.unapprove != null &&
                    <RefuseButton eventId={props.product.id}
                                  removeEventFromLoadedEvents={() => {}}
                    />
                }
                {props.toFavorites != null &&
                    <ToFavoriteButton eventId={props.product.id}/>
                }
            </div>
        </div>
    );
}

export default ProductItem;