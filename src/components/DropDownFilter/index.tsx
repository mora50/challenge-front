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
        sortOrder: 'DESC',
      },
      ASC: {
        sortField: 'price_in_cents',
        sortOrder: 'ASC',
      },
      SALES: {
        sortField: 'sales',
        sortOrder: 'DESC',
      },
    }

    const value = sortOptions[type!] ?? {}

    changeFilter(value)
  }

  const options = [
    {
      label: 'Novidades',
    },
    {
      label: 'Preço: Maior - menor',
      value: 'DESC',
    },
    {
      label: 'Preço: Menor - maior',
      value: 'ASC',
    },
    {
      label: 'Mais vendidos',
      value: 'SALES',
    },
  ]

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
            {options.map((option) => (
              <button
                key={option.value}
                className="px-4 py-2"
                onClick={() => onClickSort(option.value)}
              >
                <li>{option.label}</li>
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
