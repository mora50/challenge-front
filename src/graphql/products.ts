import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query GetProducts(
    $filter: ProductFilter
    $sortField: String
    $sortOrder: String
  ) {
    products: allProducts(
      page: 1
      perPage: 15
      filter: $filter
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      name
      image_url
      price_in_cents
      sales
      created_at
    }
  }
`

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product: Product(id: $id) {
      name
      description
      image_url
      price_in_cents
      category
    }
  }
`
