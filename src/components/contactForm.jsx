import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input type="text" className="grow" placeholder="Daisy" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Email
        <input type="text" className="grow" placeholder="daisy@site.com" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Subject" />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Enter Message" />
        <span className="badge badge-info">Send</span>
      </label>

    </div>
  )
}

export default ContactForm