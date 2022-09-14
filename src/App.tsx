import { MagnifyingGlassPlus } from "phosphor-react"
import './styles/main.css'
import logoImg from './assets/icon.png'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-2">
      <img className="w-[348px] h-[348px]" src={logoImg} />

      <h1 className="text-4xl text-[#5652B1] font-black mt-4 mx-6">Encontre seu time ideal aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16 mx-6">
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/dev.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Pokemon</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anuncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/dev.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Pokemon</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anuncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/dev.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Pokemon</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anuncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/dev.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Pokemon</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anuncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/dev.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Pokemon</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anuncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/dev.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Pokemon</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 Anuncios</span>
          </div>
        </a>
      </div>

      <div className="flex justify-between items-center bg-[#564EAC] mt-8 mx-6 px-8 py-6 self-stretch rounded-lg border-double border-8 border-black">
        <div>
          <h3 className="text-2xl font-black">Ainda não encontrou companheiros para jogar?</h3>
          <span className="text-xl text-zinc-900">Não perca tempo e crie um anúncio agora!</span>
        </div>

        <button className="flex items-center gap-3 p-2 bg-black text-[#5652B1] rounded-lg hover:bg-[#564EAC] hover:text-black border-collapse border-4 border-black">
          <MagnifyingGlassPlus size={20} />
          Criar anúncio
        </button>
      </div>
    </div>
  )
}

export default App
