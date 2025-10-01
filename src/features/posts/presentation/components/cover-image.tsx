type Props = {
  title: string
  src: string
  className?: string
}

export function CoverImage({ title, src, className }: Props) {
  return (
    <picture>
      <img className="w-full h-64 object-cover rounded-lg" src={src} alt={`Cover Image for ${title}`} />
    </picture>
  )
}
