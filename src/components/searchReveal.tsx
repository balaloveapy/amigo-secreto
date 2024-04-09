import { SearchResult } from "@/app/types/searchPerson"

type Props = {
    results:SearchResult
}
export const SearcReveal =({results}:Props)=>{
    return(
        <div>
            <p className="text-3xl">{results.person.name}</p>
            <p className="2xl my-3">Parabéns, você tirou:</p>
            <p className="text-4xl bg-blue-500 my-5 px-5 py-20 rounded-xl border-2 
            border-dashed border-blue-300">{results.personMatched.name}</p>
        </div>
    )
}