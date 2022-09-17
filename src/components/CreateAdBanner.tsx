import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog'

const CreateAdBanner = () => {
    return (
        <div className="flex justify-between items-center bg-[#564EAC] mt-8 mx-6 px-8 py-6 self-stretch rounded-lg border-double border-8 border-black">
            <div>
                <h3 className="text-2xl font-black">Ainda não encontrou companheiros para jogar?</h3>
                <span className="text-xl text-zinc-900">Não perca tempo e crie um anúncio agora!</span>
            </div>

            <Dialog.Trigger className="flex items-center gap-3 p-2 bg-black text-[#5652B1] rounded-lg hover:bg-[#564EAC] hover:text-black border-collapse border-4 border-black">
                <MagnifyingGlassPlus size={20} />
                Criar anúncio
            </Dialog.Trigger>
        </div>
    );
}

export default CreateAdBanner;