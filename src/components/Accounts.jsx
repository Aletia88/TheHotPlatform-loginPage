import React from 'react'
import Options from './Options';
import { Link } from 'react-router-dom';


const Account = ({ open, onClose }) => {
    if (!open) return null;
    return (
      <div onClick={onClose} className='overlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
              <div className='shadow w-96 md:w-full  p-7 rounded-md bg-white modal-container'>
              <p className='text-lg text-black py-8 font-medium title1 text-center'>Choose account you want to sign up for</p>
           <div>
            <Link to="/Business-account">
                <Options 
                img="busniesss" 
                title="Busniess Account"
                p="sign up or in as a business personnel"
                
                /></Link>

                <Link to="/SocialAccount">
                <Options 
                img="social" 
                title="Social Account"
                p="sign up or in as a Social personnel"
                
                /></Link>
                <Link to="/ProfessionalAccount">
                <Options 
                img="professional" 
                title="Professional Account"
                p="sign up or in as a business personnel"
                
                /></Link>
              </div>
            </div> 
          
        </div>
      </div>
    );
  };

export default Account;
