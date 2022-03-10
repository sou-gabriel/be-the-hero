import Image from 'next/image'

import { RegisteredCase } from '../components/RegisteredCase'
import Power from '../assets/icons/power.svg'

const List = () => {
  return (
    <div className="container max-w-[1120px] mx-auto px-4 py-8">
      <header className="mb-[60px] flex items-center">
        <Image src="/logo.svg" alt="Be The Hero" width="144" height="62.73" />
        <strong className="inline-block ml-12 font-regular text-xl text-gray-900">
          Bem-vinda, APAD
        </strong>
        <div className="ml-auto flex items-center gap-6 w-[346px]">
          <button className="bg-red w-full text-white font-bold rounded-md h-[60px]">
            Cadastrar novo caso
          </button>
          <button className="border-2 border-solid rounded-md h-[60px] px-[18px]">
            <Power size={24} color="#E02041" />
          </button>
        </div>
      </header>

      <main>
        <h1 className="font-medium text-3xl mb-8 text-gray-900">
          Casos cadastrados
        </h1>
        <div className="grid grid-cols-2 gap-8">
          <RegisteredCase />
          <RegisteredCase />
          <RegisteredCase />
          <RegisteredCase />
          <RegisteredCase />
        </div>
      </main>
    </div>
  )
}

export default List
