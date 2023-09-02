import React from 'react';
import Styles from './restaurants.module.css';
import Restaurant from './restaurant/Restaurant';
import Link from 'next/link';
import { app } from '@/app/firebase';
import { getFirestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore'; 
async function getData() {
  const db = getFirestore(app);
  const collectionRef = collection(db, 'restaurants');
  const querySnapshot = await getDocs(collectionRef); 
      
  const restaurantData = querySnapshot.docs.map((doc) => doc.data());
  return restaurantData;
}

const Restaurants = async() => {
  const restaurents = await getData();

  console.log(restaurents);
 
  return (
    <div className={Styles.container}>

      {restaurents.map((restaurent, index)=>(
      <Link key={index} href={`/restaurant/food/${restaurent.id}`}>
        <Restaurant name={restaurent.name} rating={restaurent.rating} tag={restaurent.tag} up={restaurent.priceup} down={restaurent.pricedown} image={restaurent.imageURL} />
      </Link>

      ))}
      
    </div>
  );
};

export default Restaurants;
