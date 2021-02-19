import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Hamburger from 'hamburger-react';
import NavDesktop from './navDesktop';
import NavMobile from './navMobile';
import Modal from '../components/modal';

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
      <div className='flex justify-between items-center dark:bg-gray-900 px-4 pt-4 pb-10 md:px-10'>
        {pathname !== '/' ? (
          <Link href={'/'} as={'/'}>
            <div className='dark:text-white text-3xl cursor-pointer'>
              Suyash S
            </div>
          </Link>
        ) : (
          <div className='dark:text-white text-3xl invisible'>Suyash S</div>
        )}
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
