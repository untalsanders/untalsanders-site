type Props = {
  title: string
  src: string
  className?: string
}

export function CoverImage({ title, src, className }: Props) {
  return (
    <picture>
      <img className={className} src={src} alt={`Cover Image for ${title}`} width={420} height={240} />
    </picture>
  )
}
