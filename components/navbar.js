import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import NavDesktop from './navDesktop';
import NavMobile from './navMobile';
import Modal from '../components/modal';
import Logo from '../components/logo';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { pathname } = useRouter();

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
      <div className='flex justify-between items-center dark:bg-gray-800 px-4 py-4 md:px-10 z-10'>
        {pathname !== '/' ? (
          <Logo />
        ) : (
          <div className='dark:text-gray-100 text-3xl invisible'>Suyash S</div>
        )}

        <ul className='md:flex dark:text-gray-100 text-xl items-center hidden'>
          <NavDesktop />
        </ul>
        <div className='md:hidden dark:text-gray-100 z-50'>
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
          <ul className='transition-all'>
            <NavMobile toggleModal={toggleModal} hamburgerOpen={setIsOpen} />
          </ul>
        </Modal>
      )}
    </>
  );
}
