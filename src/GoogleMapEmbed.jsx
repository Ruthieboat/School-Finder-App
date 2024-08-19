import React from 'react'

const GoogleMapEmbed = () => {

    return (
        // <div className='relative pt-8'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.5391202719443!2d-0.1542954260302887!3d5.6443429327571355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b550b4b1287%3A0x5bfe4abfd88d302b!2sMEST%20Africa!5e1!3m2!1sen!2sgh!4v1723390700411!5m2!1sen!2sgh" 
                className=" w-3/4 h-[45vh] md:h-[45vh] border align- border-purple-200 active:border-purple-400 rounded-md"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
     
        // </div>

    );
};

export default GoogleMapEmbed