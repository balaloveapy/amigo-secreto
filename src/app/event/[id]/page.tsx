'use client'
import  * as api  from "@/app/api/site"
import { redirect } from "next/navigation"
import {Search} from "@/components/site"


type props = {
    params: {
        id: string
    }
}
const Page =async ({ params }: props) => {
    const eventItem = await api.getEvent(+params.id)
    if(!eventItem || !eventItem.status) return redirect('/')
    return (
        <main className="text-center mx-auto max-w-lg p-5">
            <header>
                <h2 className="text-2xl text-yellow-400">Amigo Secreto</h2>
                <h1 className="text-3xl mt-5 mb-2">**  {eventItem.description} **</h1>
                <p className="text-sm mb-5"> ** {eventItem.title} **</p>
            </header>
            <Search id={eventItem.id}/>
            <footer className="mt-5 text-sm">
                Criado pelo natã
            </footer>
        </main>
    )
}
export default Page;