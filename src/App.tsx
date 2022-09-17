import { useEffect, useState } from "react"
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from "phosphor-react"

import GameBanner from "./components/GameBanner"
import CreateAdBanner from "./components/CreateAdBanner"
import Input from "./components/Form/Input"

import './styles/main.css'
import logoImg from './assets/icon.png'

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
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-2">
      <img className="w-[348px] h-[348px]" src={logoImg} />

      <h1 className="text-4xl text-[#5652B1] font-black mt-4 mx-6">Encontre seu time ideal aqui.</h1>

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
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg">
            <Dialog.Title className="text-3xl font-black">Publique seu anúncio</Dialog.Title>

            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <Input id="game" placeholder="Selecione o game que deseja jogar" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">Seu nome (ou nickname)</label>
                <Input
                  id="name"
                  placeholder="Como te chamam dentro do game?" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlayung">Joga há quantos anos?</label>
                  <Input id="yearsPlayung" type="number" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="dicord">Joga há quantos anos?</label>
                  <Input id="dicord" type="text" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      title="Domingo"
                      className="w-8 h-8 rounded-sm bg-zinc-900">
                      D
                    </button>
                    <button
                      title="Segunda"
                      className="w-8 h-8 rounded-sm bg-zinc-900">
                      S
                    </button>
                    <button
                      title="Terça"
                      className="w-8 h-8 rounded-sm bg-zinc-900"
                    >
                      T
                    </button>
                    <button
                      title="Quarta"
                      className="w-8 h-8 rounded-sm bg-zinc-900"
                    >
                      Q
                    </button>
                    <button
                      title="Quinta"
                      className="w-8 h-8 rounded-sm bg-zinc-900"
                    >
                      Q
                    </button>
                    <button
                      title="Sexta"
                      className="w-8 h-8 rounded-sm bg-zinc-900"
                    >
                      S
                    </button>
                    <button
                      title="Sábado"
                      className="w-8 h-8 rounded-sm bg-zinc-900"
                    >
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De" ></Input>
                    <Input id="hourEnd" type="time" placeholder="até" ></Input>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-2 text-sm">
                <Input type="checkbox" />
                Costumo me conectar no chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close
                  type="button"
                  className="bg-red-600 px-5 h-12 rounded-md font-semibold hover:bg-red-500"
                >
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="bg-[#5652B1] px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-[#554fc9]"
                >
                  <GameController size={24} />
                  Encontrar equipe
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>

      </Dialog.Root>
    </div>
  )
}

export default App
