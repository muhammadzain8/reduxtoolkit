import React from 'react';
import { useDispatch } from 'react-redux';
import { removerReservation } from '../feaures/reservationSlice';
import { addCustomer } from '../feaures/customerSlice';

interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(removerReservation(index));
        dispatch(
          addCustomer({
            id: new Date().getTime().toString(),
            name,
            food: [],
          })
        );
      }}
      className='reservation-card-container'
    >
      {name}
    </div>
  );
};

export default ReservationCard;
