'use client'
import { Skeleton } from '@/components'
import IconBag from '@/components/icons/bag-icon'
import { useCartContext } from '@/contexts'
import { GET_PRODUCT } from '@/graphql'
import { Product } from '@/types/products'
import { toBRLcurrencyFormat } from '@/utils/formatBRLcurrency'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCartContext()

  const { loading, error, data } = useQuery<{ product: Product }>(GET_PRODUCT, {
    variables: {
      id: params.id,
    },
  })

  const { product } = data || {}

  return (
    <section>
      <header className="mb-6">
        <Link
          passHref
          className="flex gap-2 items-center text-blue-gray"
          href="/"
        >
          <Image
            src="/assets/icons/backward-icon.svg"
            width={24}
            height={24}
            alt="Voltar para a página inicial"
          />
          Voltar
        </Link>
      </header>

      <div className="grid grid-cols-2 gap-8">
        {loading && (
          <>
            <Skeleton
              className="h-[580px]"
              aria-label="Loading product image"
            />

            <div>
              <Skeleton
                className="h-6 w-36 flex"
                aria-label="Loading product image"
              />
              <Skeleton
                className="h-9 flex my-3"
                aria-label="Loading product image"
              />

              <Skeleton
                className="h-11  w-52"
                aria-label="Loading product image"
              />

              <Skeleton
                className="h-5  flex mt-6"
                aria-label="Loading product image"
              />
            </div>
          </>
        )}
        {product && (
          <>
            <Image
              src={product.image_url}
              alt={product.name}
              height={580}
              width={640}
              priority
            />

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="capitalize">{product.category}</h3>

                <h1
                  className="my-3 text-3xl font-light"
                  aria-label={product.name}
                >
                  {product.name}
                </h1>

                <span className="text-xl font-medium text-black">
                  {toBRLcurrencyFormat(product.price_in_cents)}
                </span>

                <p className="text-xs mt-6">
                  *Frete de R$40,00 para todo o Brasil. Grátis para compras
                  acima de R$900,00.
                </p>

                <h2 className="mt-16 mb-2 text-blue-gray">DESCRIÇÃO</h2>
                <p className="text-sm">{product.description}</p>
              </div>

              <button
                aria-label="Adicionar produto ao carrinho"
                onClick={() => addToCart({ ...product, quantity: 1 })}
                className="bg-brand-blue flex w-full items-center justify-center h-11 py-3 text-white rounded gap-3"
              >
                <IconBag color="#fff" />
                ADICIONAR AO CARRINHO
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
