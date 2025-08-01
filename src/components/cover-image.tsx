import Link from 'next/link'

type Props = {
    title: string
    src: string
    slug?: string
    className?: string
}

export function CoverImage({ title, src, slug, className }: Props) {
    const image = <img className={className} src={src} alt={`Cover Image for ${title}`} width={420} height={240} />
    return (
        <>
            {slug ? (
                <Link href={`/blog/${slug}`} aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </>
    )
}
