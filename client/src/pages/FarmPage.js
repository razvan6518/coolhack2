import {useParams} from "react-router-dom";
import FarmItem from "../components/farms/FarmItem";

function FarmPage(props) {

    const { id } = useParams();


    return (
        <FarmItem farm={props.farm}/>
    );
}

export default FarmPage;