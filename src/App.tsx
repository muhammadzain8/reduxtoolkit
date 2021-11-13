import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './feaures/reservationSlice';
import CustomerCard from './components/CustomerCard';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector(
    (state: RootState) => state.customers.value
  );

  const handleAddReservation = () => {
    if (!input) return;
    dispatch(addReservation(input));
    setInput('');
  };
  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((name, index) => (
                <ReservationCard name={name} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className='reservation-input-container'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAddReservation}>Add</button>
        </div>
      </div>
      <div className='customer-food-container'>
        {customers.map((customer) => {
          return <CustomerCard id={customer.id} name={customer.name} food={customer.food}/>;
        })}
      </div>
    </div>
  );
}

export default App;
