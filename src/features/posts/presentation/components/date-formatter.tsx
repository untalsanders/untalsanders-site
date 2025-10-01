import { format, parseISO } from 'date-fns'

type Props = {
  dateString: string
}

export function DateFormatter({ dateString }: Props) {
  return (
    <time className="font-medium text-gray-600" dateTime={dateString}>
      {format(parseISO(dateString), 'LLLL d, yyyy')}
    </time>
  )
}
