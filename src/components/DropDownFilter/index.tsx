'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type DropDownFiltersProps = {
  changeFilter: (filter: { [keyof: string]: string }) => void
}

export const DropDownFilters = ({ changeFilter }: DropDownFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const onClickSort = (type?: string) => {
    setIsOpen(false)

    const sortOptions: { [keyof: string]: {} } = {
      DESC: {
        sortField: 'price_in_cents',
        sortOrder: 'price_in_cents',
      },
    }

    const value = type ? sortOptions[type!] : { sortField: 'price_in_cents' }

    console.log(value)

    changeFilter(value)
  }

  return (
    <div className="relative text-dark-grey " ref={dropdownRef}>
      <button
        type="button"
        className="items-center py-2 px-4 rounded flex"
        onClick={toggleDropdown}
      >
        Organizar por{' '}
        <Image
          className="ml-4"
          src={'assets/icons/arrow-down-icon.svg'}
          alt="Click to toggle the filters"
          width={32}
          height={16}
        />
      </button>
      {isOpen && (
        <div className="absolute top-7  right-0 mt-2 w-48 bg-white  rounded-md shadow-lg">
          <ul className="py-2">
            <button className="px-4 py-2" onClick={() => onClickSort()}>
              <li>Novidades</li>
            </button>
            <button className="px-4 py-2" onClick={() => onClickSort('DESC')}>
              <li>Preço: Maior - menor</li>
            </button>
            <button className="px-4 py-2" onClick={() => onClickSort()}>
              <li>Preço: Menor - maior</li>
            </button>
            <button className="px-4 py-2" onClick={() => onClickSort()}>
              <li>Mais vendidos</li>
            </button>
          </ul>
        </div>
      )}
    </div>
  )
}
