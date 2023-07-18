'use client'
import { useEffect, useState } from 'react'

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  const isClient = typeof window !== 'undefined'

  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    const storedValue = localStorage.getItem(key)

    if (storedValue) {
      const initialData = JSON.parse(storedValue)
      if (initialData) setValue(initialData)
    }
  }, [key])

  useEffect(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue) {
      setValue(JSON.parse(storedValue))
    }
  }, [key])

  const updatedSetValue: SetValue<T> = (newValue: any) => {
    setValue((prevValue) => {
      const resolvedValue =
        typeof newValue === 'function' ? newValue(prevValue) : newValue
      if (isClient) {
        localStorage.setItem(key, JSON.stringify(resolvedValue))
      }
      return resolvedValue
    })
  }

  return [value, updatedSetValue]
}
