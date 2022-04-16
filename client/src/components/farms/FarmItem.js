import {Link, useNavigate} from "react-router-dom";
import ApproveFarmButton from "../buttons/ApproveFarmButton";
import RefuseButton from "../buttons/RefuseButton";
import ToFavoriteButton from "../buttons/ToFavoriteButton";
import classes from './FarmItem.module.css';

function FarmItem(props) {
    const navigate = useNavigate();
    return (
        <div className={classes.cardWidth + " " + "card large"}>
            <div  className={classes.image + " " + "card-image waves-effect waves-block waves-light"} onClick={() => navigate(`/`)}>
                <img className="activator" src={props.farm.coverPhoto} alt={props.farm.name}/>
            </div>
            <div className="card-content" onClick={() => navigate(`/farm/${props.farm.id}`)}>
                <span className="card-title activator grey-text text-darken-4">{props.farm.ranchName}</span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.farm.ranchName}<i
                    className="material-icons right">close</i></span>
                <address>{props.farm.address}</address>
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

export default FarmItem;