import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCommentDots} from '@fortawesome/free-solid-svg-icons';

const BASE_URL = 'http://localhost:3001'

const HelpSupport = () => {
    const [issues, setIssues] = useState([])
    const getIssues = async () => {
        const response = await axios.get(`${BASE_URL}/issues`)

        setIssues(response.data.data);
        console.log(response.data.data);
    }
    useEffect(() => {
        getIssues()
    }, [])

    const addUser = async () => {
        const response = await axios.post(`${BASE_URL}/user`)
        console.log(response.data.data);
        // setUsers(response.data.data);
    }

    return (
        <main>
            <div className={styles.header}>
                <h2>Issues</h2>
                <button className={styles.addButton + ' ' + styles.button} onClick={() => { }}>
                    <FontAwesomeIcon className={styles.icon} icon={faAdd} onClick={addUser} />
                    Add New Issue</button>
            </div>
            <div className={styles.users}>
                {issues && issues.map((issue) => (
                    <Issue key={issue._id} issue={issue} />
                ))}
            </div>
        </main>
    )
}

const Issue = ({ issue }) => {

    return (
        <div className={styles.listItemWrapper}>
            <div className={styles.listItem}>
                <div className={styles.listDetail}>
                    <p className={styles.subtitle}>
                        <span><FontAwesomeIcon className={styles.icon} icon={faCommentDots} />{issue.message}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HelpSupport