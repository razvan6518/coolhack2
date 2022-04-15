// TODO: change name !
function RefuseButton(props) {

    function refuseHandler(){
        const requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        // todo: api url
        fetch("http://localhost:5000/events/delete/"+props.eventId, requestOptions)
            .then(response => response.text())
            .then(result => props.removeEventFromLoadedEvents(props.eventId))
            .catch(error => console.log('error', error));
    }

    return (
        <button onClick={refuseHandler}>Refuse</button>
    );
}

export default RefuseButton;