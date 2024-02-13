// Modal.js
import React from 'react';
import { useModal } from '../context/ModalContext';
import MailIcon from '../assets/mail-icon.png'
import phoneIcon from '../assets/phone-icon.png'

const Modal = () => {
    const { isOpen, closeModal } = useModal();

    const handleCloseModal = (e) => {
        if (isOpen && e.target === e.currentTarget) {
            closeModal();
        }
    };
    if (!isOpen) return null;

    console.log(isOpen);
    // console.log(closeModal);

    return (
        <div
            onClick={handleCloseModal}
            className={`backdrop-blur-sm fixed inset-0 z-20 bg-black/40 flex items-center justify-center px-4`}
        >
            <div className="modal_inner bg-white max-w-[474px] md:p-7 p-4 rounded-2xl w-full relative">
                <button
                    onClick={closeModal}
                    className='absolute md:-right-14 right-0 -top-14'
                >
                    <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.65002 2L40.9999 39.3499" stroke="white" strokeWidth="4" strokeLinecap="round" />
                        <path d="M2 39.3499L39.3499 2.00003" stroke="white" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </button>
                <div className=''>
                    <h1 className='text-2xl font-semibold mb-4'>Let’s work together</h1>
                    <div className="flex flex-wrap items-center gap-4">
                        <a href='' className="inline-flex items-center gap-2 hover:text-black">
                            <img src={MailIcon} className='w-5 shrink-0' alt="" />
                            <span className='font-semibold'>i.huseynn0@gmail.com</span>
                        </a>
                        <a href='' className="inline-flex items-center gap-2 hover:text-black">
                            <img src={phoneIcon} className='w-4 shrink-0' alt="" />
                            <span className='font-semibold'>+994 050 978 68 52</span>
                        </a>
                    </div>
                    <div className="w-ful h-[1px] bg-black/5 my-5"></div>
                    <form action="">
                        <div className='mb-4'>
                            <input className='w-full h-14 rounded-xl bg-[#F7F7F7] p-4' type="text" placeholder='What’s your name?' />
                        </div>
                        <div className='mb-4'>
                            <input className='w-full h-14 rounded-xl bg-[#F7F7F7] p-4' type="text" placeholder='What’s your email address?' />
                        </div>
                        <div className='mb-4'>
                            <input className='w-full h-14 rounded-xl bg-[#F7F7F7] p-4' type="text" placeholder='What’s your phone number?' />
                        </div>
                        <div className='mb-4'>
                            <textarea className='w-full h-14 rounded-xl bg-[#F7F7F7] p-4 min-h-28 max-h-36' type="text" placeholder='Tell me more about the project...' />
                        </div>
                        <button className='w-full py-3 bg-black/85 text-white rounded-lg hover:bg-black' type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
