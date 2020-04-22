import {CustomersApi} from '../../api/CustomerApi'

export const SET_CUSTOMERS = 'LegalSystem/Customer-reducer/SET_CUSTOMERS'

let initialState = {
  customers: []
}

const CustomersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMERS:
     return {
       ...state,
       customers: [action.customers]
     }
    default:
      return state
  }
}

const setCustomers = customers => ({
  type: SET_CUSTOMERS,
  customers
});

export const setCustomersThunk = () => async (dispatch, getState) => {
  let data = await CustomersApi.getCustomers();
  dispatch(setCustomers(data));
};

export default CustomersReducer