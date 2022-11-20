import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Dashboard from "../components/Dashboard"
import { StockContext } from "../context/StockContext"

export default function App({ Component, pageProps }: AppProps) {
  const [stockSymbol, setStockSymbol] = useState("AAPL");

  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <Component {...pageProps} />
    </StockContext.Provider>
  )

}
