export const SET_CUSTOMERS = 'LegalSystem/Customer-reducer/SET_CUSTOMERS'

let initialState = {
  customers: []
}

const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMERS:
      return state
    default:
      return state
  }
}