import { useRouter } from "next/router"

const Character = () => {
    const router = useRouter()
    
    return(
        <h1> character { router.query.id } </h1>
    )
}

export default Character