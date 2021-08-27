import Link from "next/link";

type ButtonProps = {
    index: number
}

const Button: React.FC<ButtonProps> = ({ index }) => {
    return(
        <Link href={`?page=${index}`}>
            <a>{index}</a>
        </Link>
    )
}

export default Button