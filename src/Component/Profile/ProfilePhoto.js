import React from 'react';
import PhotoDeProfil from '../../Assets/profil.jpg';
import logo from '../../Assets/dent.png';

const ProfilePhoto = () => {
    return (
        <div >
            <img Classname="Profil" src={PhotoDeProfil} alt='picprofil' style={{margin:20}}></img>
        </div>

    );
};

export default ProfilePhoto
