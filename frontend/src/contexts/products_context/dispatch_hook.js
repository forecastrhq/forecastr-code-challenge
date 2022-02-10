import React from 'react'

export const DispatchContext = React.createContext()

function useProductDispatch() {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error('useProductDispatch must be used within an ProductProvider')
  }
  return context
}

export default useProductDispatch
