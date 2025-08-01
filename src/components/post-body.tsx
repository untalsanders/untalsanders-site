type Props = {
    content: string
}

export function PostBody({ content }: Props) {
    return (
        <div className="container">
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    )
}