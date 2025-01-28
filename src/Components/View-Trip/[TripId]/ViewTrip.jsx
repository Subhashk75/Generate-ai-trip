import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../Service/firebaseConfig';
import UserInfo from '../Components/UserInfo';
import HotelInfo from '../Components/HotelInfo';

const ViewTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (tripId) {
      getTripInfo();
    }
  }, [tripId]);

  const getTripInfo = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, 'AITrips', tripId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        setTrip(docSnap.data());
      } else {
        console.log('No such document!');
        setError('Trip not found.');
      }
    } catch (err) {
      console.error('Error fetching trip data:', err);
      setError('An error occurred while fetching the trip data.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {/* Information user requires */}
      <UserInfo trip={trip} />
      {/* View hotel */}

      <HotelInfo trip={trip} />
      {/* Daily plan for trip */}
      
    </div>
  );
};

export default ViewTrip;
