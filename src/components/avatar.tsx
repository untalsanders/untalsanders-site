type Props = {
    name: string
    picture: string
}

export function Avatar({ name, picture }: Props) {
    return (
        <div>
            <img src={picture} alt={name} />
            <div>{name}</div>
        </div>
    )
}