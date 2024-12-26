import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";
import ContactForm from "../Forms/Contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-orange-300">Where to Find Me</p>
              <p className="text-gray-300">
                Ahmedabad,India <br />
                (Open to remote opportunities worldwide)
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold text-orange-300">Email Me At</p>
              <p className="text-gray-300">
                jimmyptl46@gmail.com
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold text-orange-300">Call Me At</p>
              <p className="text-gray-300">(+1) 647-865-8471</p>
              <p className="text-gray-300">(+91) 910-676-6041</p>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <p className="text-lg font-semibold text-orange-300 mb-4">
              Follow Me
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/jimmyptl-jer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://medium.com/@jimmyptl46"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition duration-300"
              >
                <FaMedium className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/jimmy-patel-b09311160/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
