export interface Skill {
    id?: string
    name: string
    description: {
        en: string
        es: string
    }
    image: string
    priority: number
}