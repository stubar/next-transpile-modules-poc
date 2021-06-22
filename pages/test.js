import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router';
const { getName } = require('country-list');
export default function Test() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            {getName('TW')}
        </div>
    )
}
