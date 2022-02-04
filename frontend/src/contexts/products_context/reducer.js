export const initialState = {
  isLoadingProducts: false,
  allProducts: [],
}

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_LOADING': {
      return { ...state, isLoadingProducts: action.payload }
    }
    case 'SET_PRODUCTS': {
      const products = action.payload

      return { ...state, allProducts: products ? products : [] }
    }
    case 'CLEAR_PRODUCTS': {
      return { ...state, allProducts: [] }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default reducer