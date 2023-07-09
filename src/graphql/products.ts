import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query GetProducts(
    $filter: ProductFilter
    $sortField: String
    $sortOrder: String
  ) {
    products: allProducts(
      page: 1
      perPage: 40
      filter: $filter
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      name
      image_url
      price_in_cents
      sales
    }
  }
`
