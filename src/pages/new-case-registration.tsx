import Image from 'next/image'
import Link from 'next/link'

import { BsArrowLeft } from 'react-icons/bs'

const NewCaseRegistration = () => {
  return (
    <div className="h-screen flex items-center px-4">
      <div className="container max-w-[1120px] mx-auto flex gap-[148px] shadow-[0_0_100px_rgba(0,0,0,0.1)] p-24 rounded-lg">
        <div>
          <div className="mb-16">
            <Image src="/logo.svg" alt="Be The Hero" width="191" height="81" />
          </div>
          <h1 className="text-gray-900 font-medium text-4xl mb-8">
            Cadastrar novo caso
          </h1>
          <p className="font-regular text-lg text-gray-700 mb-20">
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link href="/list">
            <a className="flex items-center">
              <BsArrowLeft size={24} color="#E02041" />
              <span className="ml-8 text-gray-900 font-bold text-lg hover:underline">
                Voltar para home
              </span>
            </a>
          </Link>
        </div>

        <form>
          <fieldset className="mb-4">
            <input
              type="text"
              placeholder="Título do caso"
              className="bg-white rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600 mb-2"
            />
            <textarea
              placeholder="Descrição"
              className="resize-none bg-white rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600 mb-2"
            />
            <input
              type="number"
              placeholder="Valor em reais"
              className="rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600 mb-2"
            />
          </fieldset>
          <div className="flex items-center h-[60px] gap-[17px]">
            <button
              type="button"
              className="w-[168px] border-2 border-solid border-gray-500 rounded-lg h-full font-bold text-gray-900 text-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-red text-white font-bold rounded-md grow h-full"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewCaseRegistration
