import { useQuery } from "@apollo/client"
import { loader } from "graphql.macro"
import { useEffect, useMemo } from "react"

import useProductDispatch from './dispatch_hook'
import useProductState from './state_hook'

const LIST_PRODUCTS = loader('../../graphql/product/list_products.graphql')

function useProduct() {
  const productDispatch = useProductDispatch()

  const listProductsQuery = useQuery(LIST_PRODUCTS, {
    notifyOnNetworkStatusChange: true,
  })

  const allProducts = useMemo(
    () =>
      listProductsQuery.loading || !listProductsQuery.data ? [] : listProductsQuery.data.listProducts,
    [listProductsQuery.data, listProductsQuery.loading]
  )

  const isLoadingProducts = useMemo(() => listProductsQuery.loading, [
    listProductsQuery.loading,
  ])

  useEffect(() => {
    productDispatch({ type: 'SET_PRODUCTS', payload: allProducts })
  }, [allProducts, productDispatch])

  useEffect(() => {
    productDispatch({ type: 'SET_LOADING', payload: isLoadingProducts })
  }, [isLoadingProducts, productDispatch])

  const initialData = {
    allProducts,
    isLoadingProducts
  }

  const productState = useProductState(initialData)

  return [productState, productDispatch]
}

export default useProduct