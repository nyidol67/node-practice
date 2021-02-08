import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoriesFilter from './Filters/categoryFilter';
import CityFilter from './Filters/cityFilter';
import PriceFilter from './Filters/priceFilter';
import RateFilter from './Filters/rateFilter';
import TagsFilter from './Filters/tagsFilter';
import RestaurantDisplay from './restaurantDisplay';
import Sort from './Sorts/sort';

function Home() {
    const [restaurant, setRestaurant] = useState(null);
    const [city, setCity] = useState(null);
    const [category, setCategory] = useState(null);
    const [price, setPrice] = useState(null);
    const [rate, setRate] = useState(null);
    const [tags, setTags] = useState(null);
    const [sort,setSort] = useState(null);
    
    const params = {
        category: category,
        Tags:tags,
        rating:rate,
        cost: price,
        sort:sort
    };
    useEffect(()=>{
        axios.get(`${"http://localhost:8900/restaurantdetails/:"}${city}${"?"}${new URLSearchParams(params).toString()}`)
        .then((result)=>setRestaurant(result));
    })
    return (<>
        <div>
            <div className="row">
                <div className="col-md-6">
                <Sort handleChange={setSort}/>
                </div>
                <div className="col-md-6">
                    <PriceFilter handleChange={setPrice}/>
                    <CategoriesFilter handleChange={setCategory}/>
                    <CityFilter handleChange={setCity}/>
                    <RateFilter handleChange={setRate}/>
                    <TagsFilter handleChange={setTags}/>
                </div>
            </div>
        </div>
        {/*displaying the queryparams*/}
        <p>{city}</p>
        <p>{new URLSearchParams(params).toString()}</p>
        <p>List of restaurant</p>
        {
        // iterating each reataurant object and displaying is neccesary properties
        restaurant?
        restaurant.map((rest, i) => {
            return <RestaurantDisplay restaurant={rest} />
        }):null
        }
    </>)
}
export default Home;