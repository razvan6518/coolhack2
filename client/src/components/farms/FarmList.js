import FarmItem from "./FarmItem";

function FarmList(props) {
    return (
        <ul >
            {props.events.map(farm => <FarmItem key={farm.id} farm={farm} toFavorites={true}/>)}
        </ul>
    );
}

export default FarmList;