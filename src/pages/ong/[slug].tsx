import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { RegisteredCase } from '../../components/RegisteredCase'
import Power from '../../assets/icons/power.svg'
import { getRegisteredOngs } from '../../helpers/ongs'

interface ListProps {
  ong: {
    id: string
    name: string
    email: string
    phone: string
    city: string
    uf: string
  }
}

const List = ({ ong }: ListProps) => {
  console.log(ong)

  return (
    <div className="container max-w-[1120px] mx-auto px-4 py-8">
      <header className="mb-[60px] flex items-center">
        <Image src="/logo.svg" alt="Be The Hero" width="144" height="62.73" />
        <strong className="inline-block ml-12 font-regular text-xl text-gray-900">
          Bem-vindo, {ong.name}
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

export const getServerSideProps: GetServerSideProps = async context => {
  const { slug } = context.query
  const registeredOngs = getRegisteredOngs()

  const currentOng = registeredOngs.find(
    registeredOng => registeredOng.id === slug
  )

  if (!currentOng) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      ong: currentOng,
    },
  }
}

export default List
