import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import GoBackIcon from '../assets/icons/go-back.svg'

const Home: NextPage = () => {
  return (
    <div className="container max-w-[1120px] flex items-center justify-between h-screen gap-x-32 px-4 mx-auto">
      <section className="w-[351px]">
        <div className="mb-24">
          <Image src="/logo.svg" alt="Be The Hero" width="250" height="106" />
        </div>

        <form className="mb-10">
          <fieldset>
            <legend className="font-medium text-3xl mb-8">
              Faça seu login
            </legend>
            <input
              type="text"
              placeholder="Seu ID"
              className="bg-white rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600 mb-4"
            />
          </fieldset>
          <button
            type="submit"
            className="bg-red w-full text-white font-bold rounded-md h-[60px]"
          >
            Entrar
          </button>
        </form>
        <Link href="/register">
          <a className="flex items-center text-lg hover:underline">
            <GoBackIcon />
            <span className="font-bold text-gray-800 ml-5">
              Não tenho cadastro
            </span>
          </a>
        </Link>
      </section>

      <Image src="/people.svg" alt="Pessoas juntas" width="640" height="576" />
    </div>
  )
}

export default Home
