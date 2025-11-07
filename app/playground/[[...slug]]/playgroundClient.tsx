'use client'
 
import dynamic from 'next/dynamic'
 
const Playground = dynamic(() => import('../../../src/Components/Playground'), { ssr: false })

export function PlaygroundClientOnly() {
  return <Playground />
}