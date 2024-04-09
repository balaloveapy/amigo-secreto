'use client'
import { useEffect, useState } from "react"
import {escapeCPF} from '@/app/types/uteis/scapeCPF'

type Props = {
    onsearchButton: (cpf: string) => void;
    loading:boolean
}
export const SearchForm = ({ onsearchButton,loading }: Props) => {
    const [cpfInput, setcpfInput] = useState('')
    return (
        <div>
            <h1 className="mb-3 text-xl">Qual seu CPF?</h1>
            <input className=" w-full px-4 text-4xl text-black py-2 rounded mt-6 mb-2 text-center  bg-white outline-none" inputMode="numeric" onChange={(a)=>setcpfInput(escapeCPF(a.target.value))} placeholder="Qual o seu CPF" type="text"  disabled={loading}/>
            <button className="bg-blue-400 border-b-4 border-blue-600 active:border-0 w-full p-4 rounded" onClick={() => onsearchButton(cpfInput)} disabled={loading}>{loading?'buscando...':'Entrar'}</button>

        </div>
    )

}