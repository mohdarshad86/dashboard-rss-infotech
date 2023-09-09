import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const BASE_URL = 'http://localhost:3001'

const Offers = () => {
    const [offers, setoOffer] = useState([]);
   
    const getOffers = async () => {
        const response = await axios.get(`${BASE_URL}/offers`)

        setoOffer(response.data.data);
        console.log(response.data.data);
    }
    useEffect(() => {
        getOffers()
    }, [])

    const addUser = async () => {
        const response = await axios.post(`${BASE_URL}/offers`)
        console.log(response.data.data);
        // setUsers(response.data.data);
    }

    return (
        <main>
            <div className={styles.header}>
                <h2>Offers</h2>
                <button className={styles.addButton + ' ' + styles.button} onClick={() => { }}>
                    <FontAwesomeIcon className={styles.icon} icon={faAdd} onClick={addUser} />
                    Add New Offer</button>
            </div>
            <div className={styles.users}>
                {offers && offers.map((offer) => (
                    <Offer key={offer._id} offer={offer} />
                ))}
            </div>
        </main>
    )
}

const Offer = ({ offer }) => {

    return (
        <div className={styles.listItemWrapper}>
            <div className={styles.listItem}>
                <img className={styles.listImage} src={offer.offerImage} alt="logo" />
                <div className={styles.listDetail}>
                    <p className={styles.subtitle}>
                        <span><FontAwesomeIcon className={styles.icon} icon={faCommentDots} />{offer.offer}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Offers