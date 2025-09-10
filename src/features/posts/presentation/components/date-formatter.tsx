import { format, parseISO } from "date-fns"
import styles from "@/styles/Blog.module.css"

type Props = {
    dateString: string
}

export function DateFormatter({ dateString } : Props) {
    return <time className={styles.time} dateTime={dateString}>{format(parseISO(dateString), "LLLL d, yyy")}</time>
}