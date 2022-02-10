import React from 'react'

export const StateContext = React.createContext()

function useProductState(initialData = {}) {
  const context = React.useContext(StateContext)
  if (context === undefined) {
    throw new Error('useProductState must be used within an ProductProvider')
  }
  return { ...initialData, ...context }
}

export default useProductState
