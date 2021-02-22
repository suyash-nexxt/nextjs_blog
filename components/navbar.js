import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import NavDesktop from './navDesktop';
import NavMobile from './navMobile';
import Modal from '../components/modal';
import Logo from '../components/logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  useEffect(() => {
    return () => {
      setShowModal(false);
    };
  }, []);

  return (
    <>
      <div className='flex justify-between items-center dark:bg-gray-900 px-4 pt-4 pb-10 md:px-10'>
        <Logo />
        <ul className='md:flex dark:text-white text-xl items-center hidden'>
          <NavDesktop />
        </ul>
        <div className='md:hidden dark:text-white z-50'>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            onToggle={(toggled) => {
              if (toggled) {
                setShowModal(true);
              } else {
                setShowModal(false);
              }
            }}
          />
        </div>
      </div>

      {showModal && (
        <Modal>
          <ul className=''>
            <NavMobile toggleModal={toggleModal} hamburgerOpen={setIsOpen} />
          </ul>
        </Modal>
      )}
    </>
  );
}
