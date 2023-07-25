import { useCartContext } from '@/contexts'

export const AsideValues = () => {
  const {
    cart,
    removeFromCart,
    updateProductQuantity,
    totalProductsValue,
    totalCart,
  } = useCartContext()

  return (
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
  )
}
