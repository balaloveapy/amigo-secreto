import { event } from '../types/events'
import { SearchResult } from '../types/searchPerson'
import { req } from './axios'
req.get('/events/6')
export const getEvent = async (id: number): Promise<event | false> => {
    const json = await req.get(`/events/${id}`)
    return json.data.event as event ?? false
}
export const searchCpf = async (event: number, cpf: string): Promise<SearchResult | false> => {
    const json = await req.get(`/events/${event}/search?cpf=${cpf}`)
    if (json.data.person && json.data.personMatched) {
        return json.data as SearchResult
    }
    return false
}