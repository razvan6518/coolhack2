import {Link, useNavigate} from "react-router-dom";
import ApproveFarmButton from "../buttons/ApproveFarmButton";
import RefuseButton from "../buttons/RefuseButton";
import ToFavoriteButton from "../buttons/ToFavoriteButton";

function FarmItem(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div  onClick={() => navigate(`/`)}>
                <img src={props.farm.coverPhoto} alt={props.farm.title}/>
            </div>
            <div onClick={() => navigate(`/`)}>
                <h3>{props.farm.name}</h3>
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