import { useEffect, useState } from "react"
import * as Dialog from '@radix-ui/react-dialog'

import GameBanner from "./components/GameBanner"
import CreateAdBanner from "./components/CreateAdBanner"
import { CreateAdModal } from "./components/CreateAdModal"

import logoImg from './assets/logo-nlw-esports.svg'

import axios from "axios"
interface Game {
  id: string;
  title: string;
  bennerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <div className="max-w-5xl mx-auto mt-5 flex flex-col items-center my-2">
      <img src={logoImg} />

      <h1 className="text-4xl md:text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16 mx-6">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bennerUrl}
              title={game.title}
              adsCount={game._count.ads} />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
