import {useEffect, useState} from "react";
import FarmList from "../components/farms/FarmList";
import {useAtom} from "jotai";
import {USER, USER_ROLE} from "../store";

let imageURL = "https://foodtank.com/wp-content/uploads/2020/04/COVID-19-Relief_Small-Farms-.jpg"

let FARMS = [{
    id: 1,
    name: "La Vaci",
    description: "Cea mai buna ferma",
    address: "Test Locality, Test Street, nr. 2",
    coordinates: "00.00.00.00",
    products: [{id: 1, name: "mere"}, {id: 2, name: "banane"}],
    coverPhoto: imageURL,
    rating: 5,
    reviews: [{id: "1", "text": "this is a review"}, {id: 2, test: "Another review"}],
    orders: [{id: 1, productId: 1, quantity: 10}, {id: 2, productId: 2, quantity: 7}]
},
    {
        id: 2,
        name: "La Vaci",
        description: "Cea mai buna ferma",
        address: "Test Locality, Test Street, nr. 2",
        coordinates: "00.00.00.00",
        products: [{id: 1, name: "mere"}, {id: 2, name: "banane"}],
        coverPhoto: imageURL,
        rating: 5,
        reviews: [{id: "1", "text": "this is a review"}, {id: 2, test: "Another review"}],
        orders: [{id: 1, productId: 1, quantity: 10}, {id: 2, productId: 2, quantity: 7}]
    },
    {
        id: 3,
        name: "La Vaci",
        description: "Cea mai buna ferma",
        address: "Test Locality, Test Street, nr. 2",
        coordinates: "00.00.00.00",
        products: [{id: 1, name: "mere"}, {id: 2, name: "banane"}],
        coverPhoto: imageURL,
        rating: 5,
        reviews: [{id: "1", "text": "this is a review"}, {id: 2, test: "Another review"}],
        orders: [{id: 1, productId: 1, quantity: 10}, {id: 2, productId: 2, quantity: 7}]
    }];

function AllFarmsPage() {

    const [user, setUser] = useAtom(USER);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedFarms, setLoadedFarms] = useState([]);
    const [userLoadedFarms, setUserLoadedFarms] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        console.log("user ", user);
        if (Object.keys(user).length !== 0 && user.roles[0] === "PRODUCER") {

            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            console.log("user id is ", user.id);

            fetch(`http://localhost:5000/api/user/${user.id}/ranches`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    let farms = JSON.parse(result);
                    console.log("farms got ", result);
                    for (let farm of farms) {
                        farm.coverPhoto = imageURL;
                    }
                    setLoadedFarms(farms);

                })
                .catch(error => console.log('error', error));
        } else {
            console.log("farms for all");
            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

            sessionStorage.getItem("token");

            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://localhost:5000/api/ranch/all", requestOptions)
                .then(response => response.text())
                .then(result => {
                    let farms = JSON.parse(result);
                    for (let farm of farms) {
                        farm.coverPhoto = imageURL;
                    }
                    setLoadedFarms(farms);
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        }


        setIsLoading(false)

    }, [user]);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <FarmList farms={loadedFarms}/>
        </section>
    );
}

export default AllFarmsPage;