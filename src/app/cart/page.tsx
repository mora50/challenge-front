'use client'
import { useCartContext } from '@/contexts'
import { toBRLcurrencyFormat } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { AsideValues } from './_components/AsideValues'

export default function CartPage() {
  const { cart, removeFromCart, updateProductQuantity, totalProductsValue } =
    useCartContext()

  return cart.length == 0 ? (
    <section className="flex justify-center">
      <strong> Carrinho vazio</strong>
    </section>
  ) : (
    <section className="grid grid-cols-10 gap-8">
      <div className="col-span-7">
        <header className="mb-6">
          <Link className="flex gap-2 items-center text-blue-gray" href="/">
            <Image
              src="/assets/icons/backward-icon.svg"
              width={24}
              height={24}
              alt="back button"
            />
            Voltar
          </Link>
        </header>

        <h1 className="text-2xl mt-6">SEU CARRINHO</h1>

        <h2 className="mb-6 mt-2 text-base">
          Total ({cart.length} produtos) <strong> {totalProductsValue} </strong>
        </h2>

        <div className="grid grid-flow-row gap-y-4 ">
          {cart.map((product, index) => (
            <article
              className="grid grid-flow-col gap-8 justify-start h-[211px] rounded-xl bg-white"
              key={product.id}
            >
              <Image
                src={product.image_url}
                alt={product.name}
                height={211}
                width={256}
                className="rounded-s-xl h-[211px] object-cover"
              />

              <div className="text-left my-4 mr-4 flex flex-col justify-between ">
                <div>
                  <div className="flex justify-between">
                    <span className="text-xl">{product.name}</span>

                    <button onClick={() => removeFromCart(product.id)}>
                      <Image
                        src={'/assets/icons/trash-icon.svg'}
                        width={24}
                        height={24}
                        alt={`Remove ${product.name}`}
                      />
                    </button>
                  </div>

                  <p className="mt-3 mb-9 leading-5 text-xs ">
                    {product.description}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="custom-select" role="select">
                    <select
                      className="px-3 w-[65px] h-[40px] bg-gray-light rounded-xl border border-blue-gray appearance-none"
                      name={product.name}
                      id={product.id}
                      defaultValue={product.quantity}
                      onChange={(e) =>
                        updateProductQuantity(index, Number(e.target.value))
                      }
                    >
                      <option value="1">1</option>

                      <option value="2">2</option>

                      <option value="3">3</option>
                    </select>
                  </div>

                  <span className="font-base">
                    <strong>
                      {toBRLcurrencyFormat(product.price_in_cents)}
                    </strong>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <AsideValues />
    </section>
  )
}
