import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact (){
    
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s6sem8g', 'template_o8hz1up', form.current, 'KOxXANEh65fiTpYDB')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='w-96 ml-12 mt-10 h-screen'>
      <form ref={form} onSubmit={sendEmail} className="flex items-start flex-col w-full text-base" >
        <label>Name</label>
        <input type="text" name="user_name" className='w-full h-9 p-2 rounded-md border-double border-4 border-gray-500' required title='required'/>
        <label>Email</label>
        <input type="email" name="user_email" className='w-full h-9 p-2 rounded-md border-double border-4 border-gray-500' required />
        <label>Message</label>
        <textarea name="message" className='w-full h-28 p-2 rounded-md border-double border-4 border-gray-500' required/>
        <input type="submit" value="Send" className='cursor-pointer'/>
      </form>
    </div>
    
  );
};