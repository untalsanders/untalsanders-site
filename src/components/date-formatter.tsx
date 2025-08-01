import { format, parseISO } from "date-fns"
import styles from "@/styles/Blog.module.css"

type Props = {
    dateString: string
}

export function DateFormatter({ dateString } : Props) {
    const date = parseISO(dateString)
    return <time className={styles.time} dateTime={dateString}>{format(date, "LLLL d, yyy")}</time>
}