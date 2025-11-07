import { AppClientOnly } from './appClient'
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return <AppClientOnly />
}