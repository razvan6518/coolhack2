import {useEffect, useState} from "react";
import FarmList from "../components/farms/FarmList";

let imageURL = "https://foodtank.com/wp-content/uploads/2020/04/COVID-19-Relief_Small-Farms-.jpg"

let FARMS = [{id: 1, name: "La Vaci", description: "Cea mai buna ferma", address: "Test Locality, Test Street, nr. 2", coordinates: "00.00.00.00", products: [{id: 1, name: "mere"}, {id: 2, name: "banane"}], coverPhoto: imageURL, rating: 5, reviews: [{id: "1", "text": "this is a review"}, {id: 2, test: "Another review"}], orders: [{id: 1, productId: 1, quantity: 10}, {id: 2, productId: 2, quantity: 7}]},
    {id: 2, name: "La Vaci", description: "Cea mai buna ferma", address: "Test Locality, Test Street, nr. 2", coordinates: "00.00.00.00", products: [{id: 1, name: "mere"}, {id: 2, name: "banane"}], coverPhoto: imageURL, rating: 5, reviews: [{id: "1", "text": "this is a review"}, {id: 2, test: "Another review"}], orders: [{id: 1, productId: 1, quantity: 10}, {id: 2, productId: 2, quantity: 7}]},
    {id: 3, name: "La Vaci", description: "Cea mai buna ferma", address: "Test Locality, Test Street, nr. 2", coordinates: "00.00.00.00", products: [{id: 1, name: "mere"}, {id: 2, name: "banane"}], coverPhoto: imageURL, rating: 5, reviews: [{id: "1", "text": "this is a review"}, {id: 2, test: "Another review"}], orders: [{id: 1, productId: 1, quantity: 10}, {id: 2, productId: 2, quantity: 7}]}];

function AllFarmsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedFarms, setLoadedFarms] = useState([]);

    useEffect(() => {
        setIsLoading(true);


        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        sessionStorage.getItem("token");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        // todo: add api url
        // fetch(
        //     "http://localhost:5000/events/approved", requestOptions
        // ).then(response => {
        //     return response.json();
        // }).then(data => {
        //     const events = [];
        //     for (const key in data) {
        //         const event = {
        //             id: key,
        //             ...data[key]
        //         };
        //         events.push(event);
        //     }
        //
        //     setIsLoading(false);
        //     console.log("is loading " + isLoading);
        //     console.log("loaded farms");
        //     setLoadedFarms(events);
        // });

        // sample local data
        setLoadedFarms(FARMS);
        setIsLoading(false)

    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    console.log("background ", loadedFarms);

    return (
        <section>
            <FarmList events={loadedFarms}/>
        </section>
    );
}

export default AllFarmsPage;