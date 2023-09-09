import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Home.module.css';

const BASE_URL = 'http://localhost:3001'

function Home() {
  // State variables to store counts
  const [userCount, setUserCount] = useState([]);
  const [offerCount, setOfferCount] = useState(0);
  const [issueCount, setIssueCount] = useState(0);

  const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/user`)

    setUserCount(response.data.data);
    // console.log(response.data.data);
  }

  const getOffers = async () => {
    const response = await axios.get(`${BASE_URL}/offers`)

    setOfferCount(response.data.data);
  }

  const getIssues = async () => {
    const response = await axios.get(`${BASE_URL}/issues`)

    setIssueCount(response.data.data);
  }

  useEffect(() => {
    getUsers();
    getOffers();
    getIssues();
  }, []);

  return (
    <div className={styles.cardContainer}>
      <h1>Home</h1>
      <div className={styles.card}>
        <h2>Users</h2>
        <p>Total Users: {userCount.length}</p>
      </div>
      <div className={styles.card}>
        <h2>Offers</h2>
        <p>Total Offers: {offerCount.length}</p>
      </div>
      <div className={styles.card}>
        <h2>Issues</h2>
        <p>Total Issues: {issueCount.length}</p>
      </div>
    </div>
  );
}

export default Home;
