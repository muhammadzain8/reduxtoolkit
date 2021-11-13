import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomerState {
  value: Customer[];
}
interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface FoodtoCustomer{
  id: string,
  food: string
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodtoCustomer: (state, action: PayloadAction<FoodtoCustomer>)=>{
      state.value.forEach((customer)=>{
        if(customer.id===action.payload.id){
          customer.food.push(action.payload.food)
        }
      })
    }
  },
});


export const { addCustomer ,addFoodtoCustomer} = customerSlice.actions;
export default customerSlice.reducer;
