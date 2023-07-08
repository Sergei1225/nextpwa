"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function NewPage() {
  const router = useRouter();

  return (
    <>
       <h3>New page</h3>
       <button onClick={() => router.back()}>Back</button>
    </>
   
  )
}
