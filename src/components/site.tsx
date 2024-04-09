'use client'

import { SearchResult } from "@/app/types/searchPerson";
import { useState } from "react";
import { SearchForm } from "./searchForm";
import * as api from '@/app/api/site'
import { SearchReveal } from "./searchReveal";

type Props={
    id:number;
}
export const Search = ({id}:Props)=>{
    const [result,setResult] = useState<SearchResult>()
    const [loading,setloading]= useState(false)
    const handleSearchButton = async (cpf:string)=>{
        if(!cpf)return
        setloading(true)
        const json = await api.searchCpf(id,cpf)
        setloading(false)
        if(!json)return alert('Desculpe não encontramos o cpf')
        setResult(json)
    }
    return(
        <section className="bg-gray-900 p-5 rounded">
            {!result && <SearchForm loading={loading} onsearchButton={handleSearchButton}/>}
            {result && <SearchReveal results={result}/> }
            
            aa
        </section>
    )
}