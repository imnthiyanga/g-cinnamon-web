
import { FaMapMarkerAlt, FaEnvelope, } from "react-icons/fa";
import React from "react";
import emailjs from "@emailjs/browser";




const MyMapComponent = (props) => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7921349441076!2d79.89829207467457!3d6.795127593202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245416b7f34b5%3A0x7bd32721ab02560e!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1714599860835!5m2!1sen!2slk"
    width="400"
    height="300"
    className="w-full h-full"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);

const handleSubmit = async (e) => {
  e.preventDefault();
 

  emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, {
    to_name: "G_Cinnamon",
    from_name: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  }, process.env.NEXT_PUBLIC_USER_ID)
  .then((response) => {
    if (response.status === 200) {
      alert('Message sent successfully');
    } else {
      alert('Failed to send message');
    }
  })
  .catch((error) => {
    console.error('EmailJS error:', error);
    console.log(process.env.NEXT_PUBLIC_SERVICE_ID);
    console.log(process.env.NEXT_PUBLIC_TEMPLATE_ID);
    console.log(process.env.NEXT_PUBLIC_USER_ID);
    alert('Failed to send message');
  });
};
  

function ContactForm() {
  return (
    <div id="contact" className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-5xl ">
        <div className="flex items-center">
          <FaEnvelope className="text-4xl text-black mr-4"/>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let&apos;s Talk</h2>
        </div>

        <div className="mt-16 flex flex-col gap-10 sm:gap-y-15 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900 text-left"
                >
                  Full Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900 text-left"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    placeholder="johndoe@webmail.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold leading-6 text-gray-900 text-left"
                >
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    placeholder="Regarding Paper Submission"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900 text-left"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    defaultValue={""}
                    placeholder="Leave your message here"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-sm text-gray-500 mt-3 text-left">
              You will followed up by an email sent to the above provided email
              after a little matter of time
            </h2>
            <div className="mt-5">
              <button
                type="submit"
                className="block w-1/3 rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <div className="flex items-center">
              <div>
                <FaMapMarkerAlt className="text-xl text-black mr-2"/>
              </div>
              <h2 className="text-xl text-gray-900 text-left ">
                Abc, 4 cross Rd, Abd treet, Sri Lanka
              </h2>
            </div>

            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <MyMapComponent
                isMarkerShown
                googleMapURL="https://www.google.com/maps/place/University+of+Moratuwa/@6.7950132,79.8989601,17.45z/data=!4m6!3m5!1s0x3ae245416b7f34b5:0x7bd32721ab02560e!8m2!3d6.7951276!4d79.900867!16zL20vMDVjN3Rn?entry=ttu"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
            <div className="flex items-center mt-8">
            <FaEnvelope className="text-xl text-black mr-2"/>
            <h2 className="text-xl text-gray-900 text-left ">abc@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;