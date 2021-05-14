import React, {useState, useEffect, useContext} from 'react';
import { useHistory, useParams } from "react-router-dom";
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const UpdateRestaurant = (props) => {

    const {id} = useParams();
    let history = useHistory();
    const {restaurants} = useContext(RestaurantsContext);
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [price_range, setPriceRange] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await RestaurantFinder.get(`/${id}`);
            setName(response.data.data.restaurant.name);
            setLocation(response.data.data.restaurant.location);
            setPriceRange(response.data.data.restaurant.price_range);
        }

        fetchData();

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: price_range,
        });
        history.push("/");
    }

    return (
        <div>
            <form action="">
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control" type="text" />
                </div>
            
                <div className="form-group">
                <label htmlFor="location">Location</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} id="location" className="form-control" type="text" />
                </div>
            
                <div className="form-group">
                <label htmlFor="price_range">Price Range</label>
                <input value={price_range} onChange={(e) => setPriceRange(e.target.value)} id="price_range" className="form-control" type="number" />
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UpdateRestaurant
