import Link from 'next/link'

type Props = {
    title: string
    src: string
    slug: string
}

export function CoverImage({ title, src, slug }: Props) {
    const image = <img src={src} alt={`Cover Image for ${title}`} width={420} height={320} />
    return (
        <div>
            {slug ? (
                <Link href={`/blog/${slug}`} aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    )
}
