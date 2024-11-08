"use client"
import React from 'react'

function Page() {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const sms = {
      phone: formData.get('phone'),
      message: formData.get('message'),
    };
    const res = await fetch('/api/sms', {
      method: 'POST',
      body: JSON.stringify(sms),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
    alert(`Message sent to ${sms.phone}`);
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='bg-slate-900 p-10' onSubmit={onSubmit}>
        <h1 className='text-white text-3xl font-bold'>Send a Message to Alex Sandro</h1>
        <label htmlFor='' className='text-white block my-4'>Write your phone number</label>
        <input
          type='tel'
          placeholder='Write your phone number'
          className='px-3 py-1 rounded-md block'
          name="phone" />
        <label htmlFor='' className='text-white block my-4' />
        <textarea name="message" placeholder="Write your message here"
          className='px-3 py-1 rounded-md w-full'
        ></textarea>
        <button className='bg-blue-500 text-white px-3 py-1 rounded-md block mt-4'>Send</button>
      </form>
    </div>
  )
}

export default Page