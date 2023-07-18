'use client'
import { useCartContext } from '@/contexts'
import { toBRLcurrencyFormat } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateProductQuantity,
    totalProductsValue,
    totalCart,
  } = useCartContext()

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

      <aside className="col-span-3 bg-white py-4 px-6 flex flex-col h-[700px]">
        <header>
          <span className="text-dark uppercase font-bold text-xl">
            Resumo do pedido
          </span>
        </header>

        <div className="mt-7 grid grid-cols-2 justify-between gap-y-3">
          <span>Subtotal de produtos</span>

          <span className="text-right">{totalProductsValue}</span>

          <span>Entrega</span>

          <span className="text-right">R$ 40,00</span>
        </div>

        <hr className="border-t-light border-t-2 mt-6 mb-2" />

        <div className="flex justify-between mb-6 ">
          <span className="font-bold">Total</span>

          <span className="text-right">
            <strong>{totalCart} </strong>{' '}
          </span>
        </div>

        <button className="uppercase text-base text-center h-11 w-full bg-green text-white rounded">
          Finalizar compra
        </button>

        <nav className="mt-auto flex flex-col uppercase gap-3 decoration-dark-grey underline text-dark-grey">
          <a> Ajuda</a>
          <a>Reembolsos</a>
          <a> Entregas e frete</a>
          <a> Trocas e devoluções</a>
        </nav>
      </aside>
    </section>
  )
}
