import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faChevronDown, faChevronUp, faEdit, faEnvelope, faLocationDot, faPhone, faTrash, faTty } from '@fortawesome/free-solid-svg-icons';
import PopUp from './helper/PopUp';
import EditPopUp from './helper/EditPopUp';

const BASE_URL = 'http://localhost:3001'

const Users = () => {
    const [users, setUsers] = useState([])
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    const getUsers = async () => {
        const response = await axios.get(`${BASE_URL}/user`)

        setUsers(response.data.data);
        // console.log(response.data.data);
    }
    useEffect(() => {
        getUsers()
    }, [])

    const addUser = async (userData) => {
        const response = await axios.post(`${BASE_URL}/register`, userData)
        setUsers([...users, response.data.data])
        console.log(response.data.data);
    }

    const openAddUserModal = () => {
        setIsAddUserModalOpen(true);
    };

    const closeAddUserModal = () => {
        setIsAddUserModalOpen(false);
    };

    const deleteUser = (userId) => {
        setUsers(users.filter((user) =>
            user._id !== userId
        ))

        console.log(userId);
    }
    const updateUser = (newData) => {
        const updatedUsers = users.map((user) =>
            user._id === newData._id ? newData : user
        );

        // Update the state with the new list of users
        setUsers(updatedUsers);
    }

    return (
        <main>
            <div className={styles.header}>
                <h2>Users</h2>
                <button className={styles.addButton + ' ' + styles.button} onClick={openAddUserModal}>
                    <FontAwesomeIcon className={styles.icon} icon={faAdd} />
                    Add New User</button>
                <PopUp
                    isOpen={isAddUserModalOpen}
                    closeModal={closeAddUserModal}
                    addUser={addUser}
                />
            </div>
            <div className={styles.users}>
                {users && users.map((user) => (
                    <User key={user._id} user={user} deleteSingleUser={deleteUser}
                        updateUser={updateUser} />
                ))}
            </div>
        </main>
    )
}

const User = ({ user, deleteSingleUser, updateUser }) => {
    const [showMore, setShowMore] = useState(false);
    const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);

    const deleteUser = async () => {
        const response = await axios.delete(`${BASE_URL}/user/${user._id}`)
        deleteSingleUser(user._id)
        console.log(response);
    }

    const editUser = async (userData) => {
        const response = await axios.put(`${BASE_URL}/user/${userData._id}`, userData)
        console.log(response.data);
        updateUser(userData)
        // setUsers(response.data.data);
    }

    const openEditUserModal = () => {
        setIsEditUserModalOpen(true);
    };

    const closeEditUserModal = () => {
        setIsEditUserModalOpen(false);
    };

    return (
        <div className={styles.listItemWrapper}>
            <div className={styles.listItem}>
                <img className={styles.listImage} src={user.profileLogo} alt="logo" />
                <div className={styles.listDetail}>
                    <p className={styles.title}>
                        <span className={styles.large}>{user.name}</span>
                        <span className={styles.small}>({user.type})</span>
                    </p>
                    <p className={styles.subtitle}>
                        <span><FontAwesomeIcon className={styles.icon} icon={faPhone} />{user.mobile}</span>
                        <span><FontAwesomeIcon className={styles.icon} icon={faEnvelope} />{user.email}</span>
                    </p>
                </div>
                <button className={styles.expandButton} onClick={() => { setShowMore(!showMore) }}>
                    <FontAwesomeIcon icon={showMore ? faChevronUp : faChevronDown} />
                </button>
            </div>
            {showMore && <div className={styles.details}>
                <div className={styles.listItem}>
                    <img className={styles.detailImage} src={user.shopLogo} alt={user.shopName} />
                    <div>
                        <p className={styles.title}>
                            <span className={styles.large}>{user.shopName}</span>
                            <span>({user.shopType})</span>
                        </p>
                        <p>{user.services}</p>
                        <p><FontAwesomeIcon className={styles.icon} icon={faLocationDot} />{user.landmark}, {user.address}, {user.state} ({user.pincode})</p>
                        <p><FontAwesomeIcon className={styles.icon} icon={faTty} />{user.landline}</p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <button className={styles.updateButton + ' ' + styles.button} onClick={openEditUserModal}>
                        <FontAwesomeIcon className={styles.icon} icon={faEdit} />
                        Update Details</button>
                    <EditPopUp
                        isOpen={isEditUserModalOpen}
                        closeModal={closeEditUserModal}
                        addUser={editUser}
                        user={user}
                    />
                    <button className={styles.deleteButton + ' ' + styles.button} onClick={deleteUser}>
                        <FontAwesomeIcon className={styles.icon} icon={faTrash} />
                        Delete User</button>
                </div>
            </div>}
        </div>
    )
}

export default Users

// address
// :
// "moti nagar"
// createdAt
// :
// "2023-09-05T14:34:09.134Z"
// email
// :
// "avinas.rssindia@gmail.com"
// landline
// :
// "123456741"
// landmark
// :
// "najafagarh road"
// latitude
// :
// 28.6313074
// longitude
// :
// 77.081429
// mobile
// :
// "1111111111"
// name
// :
// "avinash testing"
// pincode
// :
// "110015"
// profileLogo
// :
// "https://i.pinimg.com/1200x/66/ff/cb/66ffcb56482c64bdf6b6010687938835.jpg"
// services
// :
// "repair, earphones"
// shopLogo
// :
// "https://i.pinimg.com/1200x/66/ff/cb/66ffcb56482c64bdf6b6010687938835.jpg"
// shopName
// :
// "mobile center"
// shopType
// :
// "RO Service"
// state
// :
// "Delhi"
// type
// :
// "partner"