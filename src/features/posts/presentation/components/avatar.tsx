type Props = {
  name: string
  picture: string
  className?: string
}

export function Avatar({ name, picture, className }: Props) {
  return (
    <div className="flex items-center gap-3">
      <img className="w-10 h-10 rounded-full object-cover" src={picture} alt={name} />
      <span className={`font-semibold text-lg text-gray-800 ${className}`}>{name}</span>
    </div>
  )
}
