export const SET_CUSTOMERS = 'LegalSystem/Customer-reducer/SET_CUSTOMERS'

let initialState = {
  customers: []
}

const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMERS:
     return {
       ...state,
       customers: action.customers
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
  console.log(data)
};

export default CustomerReducer