import { useRef } from 'react'

export default function useIsMounted() {
  const isMounted = useRef(false)
  const setIsMounted = (a: boolean) => (isMounted.current = a)

  return { isMounted, setIsMounted }
}
