import { PlaygroundClientOnly } from './playgroundClient'

export function generateStaticParams() {
    return [{ slug: [''] }]
}

export default function Page() {
    return <PlaygroundClientOnly />
}