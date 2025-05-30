import { Timestamp } from "firebase/firestore"

export interface Job {
    id?: string
    company: string
    position: {
        es: string
    }
    startAt: Timestamp
    endAt: Timestamp
    description: string
}
