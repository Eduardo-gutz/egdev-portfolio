import { Skill } from "@/interfaces/skill.interface"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"
import { Job } from "@/interfaces/job.interface"    
import { Project } from "@/interfaces/project.interface"

export const saveSkill = async (skill: Skill) => {
    if (!db) {
        throw new Error('Firestore is not initialized')
    }
    
    const skillRef = collection(db, 'skills')
    const docRef = await addDoc(skillRef, skill)
    return docRef.id
}

export const getSkills = async () => {
    if (!db) {
        throw new Error('Firestore is not initialized')
    }

    const skillsRef = collection(db, 'skills')
    const querySnapshot = await getDocs(skillsRef)
    return querySnapshot.docs.map((doc) => doc.data() as Skill)
}

export const getJobs = async () => {
    if (!db) {
        throw new Error('Firestore is not initialized')
    }

    const jobsRef = collection(db, 'jobs')
    const querySnapshot = await getDocs(jobsRef)
    return querySnapshot.docs.map((doc) => doc.data() as Job)
}

export const getProjects = async () => {
    if (!db) {
        throw new Error('Firestore is not initialized')
    }

    const projectsRef = collection(db, 'projects')
    const querySnapshot = await getDocs(projectsRef)
    return querySnapshot.docs.map((doc) => doc.data() as Project)
}
