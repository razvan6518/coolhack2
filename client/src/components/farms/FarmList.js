import FarmItem from "./FarmItem";
import classes from "./FarmList.module.css";

function FarmList(props) {
    return (
        <div className={classes.list}>
            <ul >
                {props.events.map(farm => <FarmItem key={farm.id} farm={farm} toFavorites={true}/>)}
            </ul>
        </div>
    );
}

export default FarmList;