'use client'

import { Categories, DropDownFilters, Pagination, Skeleton } from '@/components'
import { GET_PRODUCTS } from '@/graphql'
import { Product } from '@/types/products'
import { toBRLcurrencyFormat } from '@/utils/formatBRLcurrency'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type Filter = {
  category: null | string
}

type Sort = {
  sortField?: null | string
  sortOrder?: null | string
}

export default function Home() {
  const [filter, setFilter] = useState<Filter>({
    category: null,
  })

  const [sort, setSort] = useState<Sort>({})

  const categoryFilter = filter.category ? { category: filter.category } : {}

  const { loading, error, data } = useQuery<{ products: Product[] }>(
    GET_PRODUCTS,
    {
      variables: {
        filter: categoryFilter,
        ...sort,
      },
    }
  )

  const loadProducts = Array.from({ length: 5 }, (_, index) => (
    <Skeleton key={index} className="h-[369px] rounded-lg" />
  ))

  return (
    <>
      <div className="flex justify-between items-center">
        <Categories
          currentFilter={filter.category}
          changeFilter={(newFilter) => setFilter({ category: newFilter })}
        />

        <DropDownFilters changeFilter={(filter) => setSort(filter)} />
      </div>

      <Pagination />

      <section className="mt-9 grid grid-cols-4 gap-8">
        {loading
          ? loadProducts
          : data?.products?.map((product) => (
              <article key={product.id} className="rounded-lg bg-white">
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={product.image_url}
                    width={256}
                    height={300}
                    alt="first product"
                    className="object-cover w-full h-72 rounded-t-lg"
                  />

                  <div className="py-2 px-3">
                    <h2 className="font-light">{product.name} </h2>

                    <hr className="my-2 border-gray" />

                    <strong className="text-black">
                      {toBRLcurrencyFormat(product.price_in_cents)}
                    </strong>
                  </div>
                </Link>
              </article>
            ))}
      </section>
    </>
  )
}
