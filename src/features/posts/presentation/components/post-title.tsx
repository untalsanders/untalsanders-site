type Props = {
  title: string
}

export function PostTitle({ title }: Props) {
  return <h1 className="text-2xl mt-6 font-bold text-gray-900 leading-tight">{title}</h1>
}
