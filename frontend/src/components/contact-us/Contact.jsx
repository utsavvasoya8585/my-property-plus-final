import React from 'react';
import CommonHero from "../common/CommonHero";
import ContactSection from './ContactSection';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className=''>
      <CommonHero subTitle={"Home / Contact Us"} title={"Contact Us"} />

      <div className='flex flex-col gap-10'>
        <div className='flex flex-row gap-20 px-52 py-20'>
          <div className='w-[70%] shadow-xl hover:shadow-2xl p-10'>
            <ContactForm />
         </div>
          <div className='w-[30%] shadow-xl hover:shadow-2xl p-10'>
            <ContactSection />
          </div>
        </div>

        <div>
          <iframe
            title="map"
            className="w-full h-[600px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.5437007585956!2d80.24307000000002!3d13.064691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526798a7ea4201%3A0x494336a1912291e2!2sMyPropertyPlus!5e0!3m2!1sen!2sin!4v1686209212033!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact