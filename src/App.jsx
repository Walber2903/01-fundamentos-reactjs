import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './Post'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <h1>Hello World</h1>

      <Header />

      <Post 
        author = "Walber Araujo"
        content = "NAOSIFNAIBIFnsfnabsoifaBAF"
      />
      <Post 
        author = "Enzo Henrique"
        content = "NAOSIFNAIBIFnsfnabsoifaBAF"
      />

    </div>
  )
}