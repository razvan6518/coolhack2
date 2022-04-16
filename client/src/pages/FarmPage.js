import {useParams} from "react-router-dom";

function FarmPage(props) {

    const { id } = useParams();

    return (
        <p>farm page {id}</p>
    );
}

export default FarmPage;