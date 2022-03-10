import { BiTrash } from 'react-icons/bi'

export const RegisteredCase = () => {
  return (
    <div className="bg-white p-8 rounded-lg relative">
      <button className="absolute top-6 right-6">
        <BiTrash size={24} color="#A8A8B3" />
      </button>

      <div className="mb-8">
        <strong className="inline-block uppercase text-sm mb-4">Caso:</strong>
        <p className="text-gray-700 text-lg">Cadelinha atropelada</p>
      </div>

      <div className="mb-8">
        <strong className="inline-block uppercase text-sm mb-4">
          Descrição
        </strong>
        <p className="text-gray-700 text-lg">
          A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve
          que passar por uma cirurgia às pressas.
        </p>
      </div>

      <div>
        <strong className="inline-block uppercase text-sm mb-4">Valor:</strong>
        <p className="text-gray-700 text-lg">R$ 120,00 reais</p>
      </div>
    </div>
  )
}
