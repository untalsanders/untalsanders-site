type Props = {
  title: string
}

export function PostTitle({ title }: Props) {
  return <h1 className="text-3xl font-bold text-gray-900 leading-tight">{title}</h1>
}
