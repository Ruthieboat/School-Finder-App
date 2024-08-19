import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex flex-col gap-3 p-5 '>
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input type="text" className="grow" placeholder="" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Email
        <input type="text" className="grow" placeholder="" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Subject" />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow h-50" placeholder="Enter Message" />
        <span className="bg-white rounded-md w-56 text-left">Send</span>
      </label>

    </div>
  )
}

export default ContactForm