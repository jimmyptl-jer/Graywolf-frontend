import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="p-8 rounded-md shadow-md text-center mt-8">
      <h2 className="text-3xl font-bold mb-6">Reach Out Today</h2>

      <div className="flex flex-col items-center">
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-2xl mr-2" />
          <span className="font-semibold">jimmyptl46@gmail.com</span>
        </div>
        <div className="flex items-center">
          <FaPhoneAlt className="text-2xl mr-2" />
          <span className="font-semibold"> (+1) 647-865-8471 </span>
        </div>
        <div className="flex items-center">
          <FaPhoneAlt className="text-2xl mr-2" />
          <span className="font-semibold"> (+49) 159-0473-4016 </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
