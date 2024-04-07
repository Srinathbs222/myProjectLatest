import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { AddNumbers } from '../components/addNumbers'

export default function Home() {
return (
<main
className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
    <h1 className="text-4xl font-bold">Add Numbers - Auto deployment</h1>
<AddNumbers />
</main>
)
}