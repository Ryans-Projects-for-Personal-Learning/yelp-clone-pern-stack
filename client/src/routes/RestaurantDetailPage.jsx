import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetailpage = () => {
    const {id} = useParams();
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);

    useEffect (()  => {
        const fetchData = async () => {

            try {
                const response = await RestaurantFinder.get(`/${id}`);
                setSelectedRestaurant(response.data.data);
            } catch(err){
                console.log(err)
            }
            
        }

        fetchData();
    }, []);
    return (
        <div>
            {selectedRestaurant && (
                <>
                <h1 className=" text-center display">{selectedRestaurant.restaurant.name}</h1>
                <div className="text-center">
                    <StarRating rating={selectedRestaurant.restaurant.average_rating} />
                    <span className="text-warning ml-1">
                        {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"}

                    </span>
                </div>
                
                <AddReview/>

                <h1>Reviews</h1>
                <div clasName="my-3">
                    <Reviews reviews={selectedRestaurant.reviews} />
                    
                </div>
                </>
            )}
        </div>
    );
};

export default RestaurantDetailpage
