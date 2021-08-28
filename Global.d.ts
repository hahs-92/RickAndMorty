type Characters = {
    id: number,
    name: string,
    image: string
}

type Character = {
    id: number,
    name: string,
    status: string,
    gender: string,
    origin :{
        name: string
    },
    image: string
}

type HomeProps = {
    characters: Characters[]
}

type CharacterIdProps = {
    character: Character
}