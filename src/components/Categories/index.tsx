import React from 'react'

type CategoriesProps = {
  currentFilter: string | null
  changeFilter: (filter: string | null) => void
}

export const Categories = ({
  currentFilter,
  changeFilter,
}: CategoriesProps) => {
  const activeFilter = 'border-b-4 border-orange text-dark font-bold'

  return (
    <nav>
      <ul className="text-dark flex md:gap-x-10 gap-x-2 uppercase text-base">
        <li className={!currentFilter ? activeFilter : undefined}>
          <button onClick={() => changeFilter(null)} className="uppercase">
            TODOS OS PRODUTOS
          </button>
        </li>

        <li className={currentFilter == 't-shirts' ? activeFilter : undefined}>
          <button onClick={() => changeFilter('t-shirts')}>CAMISETAS</button>{' '}
        </li>

        <li className={currentFilter == 'mugs' ? activeFilter : undefined}>
          {' '}
          <button onClick={() => changeFilter('mugs')}>CANECAS</button>{' '}
        </li>
      </ul>
    </nav>
  )
}
