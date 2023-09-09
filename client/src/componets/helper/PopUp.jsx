import React, { useState } from 'react';
import Modal from 'react-modal';
import './PopUp.css'

function PopUp({ isOpen, closeModal, addUser }) {
    const [userData, setUserData] = useState({
        mobile: '',
        address: '',
        email: '',
        landline: '',
        landmark: '',
        latitude: 0,
        longitude: 0,
        name: '',
        pincode: '',
        profileLogo: 'https://i.pinimg.com/1200x/66/ff/cb/66ffcb56482c64bdf6b6010687938835.jpg',
        services: '',
        shopLogo: 'https://i.pinimg.com/1200x/66/ff/cb/66ffcb56482c64bdf6b6010687938835.jpg',
        shopName: '',
        shopType: '',
        state: '',
        type: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        // console.log(userData, 'popup');
        e.preventDefault()
        addUser(userData);
        closeModal();
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Add User Modal"
        >
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                {/* Add input fields for each property */}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    value={userData.mobile}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={userData.address}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="landline"
                    placeholder="landline"
                    value={userData.landline}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="landmark"
                    placeholder="landmark"
                    value={userData.landmark}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="latitude"
                    placeholder="latitude"
                    value={userData.latitude}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="longitude"
                    placeholder="longitude"
                    value={userData.longitude}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="pincode"
                    placeholder="pincode"
                    value={userData.pincode}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="profileLogo"
                    placeholder="profileLogo"
                    value={userData.profileLogo}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="shopLogo"
                    placeholder="shopLogo"
                    value={userData.shopLogo}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="shopName"
                    placeholder="shopName"
                    value={userData.shopName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="shopType"
                    placeholder="shopType"
                    value={userData.shopType}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="state"
                    placeholder="state"
                    value={userData.state}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="type"
                    placeholder="type"
                    value={userData.type}
                    onChange={handleChange}
                />
                {/* Repeat this for other fields */}
                <button type="submit">Add User</button>
                <button className='modal-close-button' onClick={closeModal}>close</button>
            </form>
        </Modal>
    );
}

export default PopUp;
