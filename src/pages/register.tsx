import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import toast from 'react-hot-toast'

const Register: NextPage = () => {
  const [isRegisteringOng, setIsRegisteringOng] = useState(false)
  const [accessId, setAccessId] = useState(null)

  const isASuccessfulOngRegistration = !isRegisteringOng && accessId

  const handleRegisterONG = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as HTMLFormElement

    try {
      setIsRegisteringOng(true)

      const response = await fetch('http://localhost:3000/api/ongs/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: target.ong.value.trim(),
          email: target.email.value.trim(),
          phone: target.phone.value.trim(),
          city: target.city.value.trim(),
          uf: target.uf.value.trim(),
        }),
      })

      if (response.status === 409) {
        throw new Error('O nome desta ONG já está cadastrado.')
      }

      const data = await response.json()

      setAccessId(data.accessId)
      toast.success('Cadastro realizado com sucesso.')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setIsRegisteringOng(false)
    }
  }

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
        <div>
          <form onSubmit={handleRegisterONG}>
            <fieldset>
              <input
                type="text"
                name="ong"
                placeholder="Nome da ONG"
                className="bg-white rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600 mb-2"
                required
              />
              <input
                type="text"
                name="email"
                placeholder="E-mail"
                className="bg-white rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600 mb-2"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="WhatsApp"
                className="bg-white rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600 mb-2"
                required
              />
              <div className="flex mb-4">
                <input
                  type="text"
                  name="city"
                  placeholder="Cidade"
                  className="bg-white rounded-md py-4 px-6 w-full text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600"
                  required
                />
                <input
                  type="text"
                  name="uf"
                  placeholder="UF"
                  maxLength={2}
                  className="bg-white rounded-md py-4 px-6 ml-2 w-[70px] text-gray-600 border-2 border-gray-500 border-solid placeholder:text-gray-600"
                  required
                />
              </div>
            </fieldset>
            <button
              type="submit"
              className={`flex items-center justify-center bg-red w-full text-white font-bold rounded-md h-[60px] ${
                isRegisteringOng ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isRegisteringOng}
            >
              {isRegisteringOng ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Cadastrando...
                </>
              ) : (
                'Cadastrar'
              )}
            </button>
          </form>
          {isASuccessfulOngRegistration && (
            <p className="mt-4 font-bold text-gray-900 text-md text-center">
              Seu id de acesso é: <br />
              <span className="underline">{accessId}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Register
