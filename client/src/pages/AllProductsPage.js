import ProductList from "../components/products/ProductList";
import {useEffect} from "react";


function AllProductsPage() {

    // useEffect(() => {
    //     window.initMap = initMap;
    // })

    return (<div>

        </div>
    )
}
//
// function initMap() {
//     const myLatlng = { lat: 44.438, lng: 26.102 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 12,
//         center: myLatlng,
//     });
//     // Create the initial InfoWindow.
//     let infoWindow = new google.maps.InfoWindow({
//         content: "Click the map to get Lat/Lng!",
//         position: myLatlng,
//     });
//
//     infoWindow.open(map);
//     // Configure the click listener.
//     map.addListener("click", (mapsMouseEvent) => {
//         // Close the current InfoWindow.
//         infoWindow.close();
//         // Create a new InfoWindow.
//         infoWindow = new google.maps.InfoWindow({
//             position: mapsMouseEvent.latLng,
//         });
//         infoWindow.setContent(
//             JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
//         );
//         infoWindow.open(map);
//     });
// }

export default AllProductsPage;