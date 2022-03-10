import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const Register: NextPage = () => {
  return (
    <div className="h-screen flex items-center px-4">
      <div className="container max-w-[1120px] mx-auto flex shadow-[0_0_100px_rgba(0,0,0,0.1)] p-24 rounded-lg">
        <div className="mr-24">
          <div className="mb-16">
            <Image src="/logo.svg" alt="Be The Hero" width="250" height="106" />
          </div>
          <h1 className="font-medium text-4xl text-gray-900 mb-8">Cadastro</h1>
          <p className="font-normal text-lg text-gray-700 mb-20">
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link href="/">
            <a className="flex items-center">
              <FiArrowLeft className="text-red text-2xl" />
              <span className="ml-4 font-bold text-lg text-gray-800 hover:underline">
                Voltar para a página de login
              </span>
            </a>
          </Link>
        </div>
        <form>
          <fieldset>
            <input
              type="text"
              placeholder="Nome da ONG"
              className="bg-white rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600 mb-2"
            />
            <input
              type="text"
              placeholder="E-mail"
              className="bg-white rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600 mb-2"
            />
            <input
              type="tel"
              placeholder="WhatsApp"
              className="bg-white rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600 mb-2"
            />
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Cidade"
                className="bg-white rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600"
              />
              <input
                type="text"
                placeholder="UF"
                maxLength={2}
                className="bg-white rounded-md py-4 px-6 ml-2 w-[70px] text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600"
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="bg-red w-full text-white font-bold rounded-md h-[60px]"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
