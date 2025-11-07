'use client'
 
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('../../src/Components/App'), { ssr: false })

export function AppClientOnly() {
  return <App />
}