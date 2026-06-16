import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer section">
      <div className="wrapper h-24 p-12 text-white flex justify-center items-center shadow-sm">
        <div className="icons flex gap-2">
          <p className="text-gray-200 relative top-2">
            Keep up with my activities here
          </p>
          <a
            href="https://github.com/crispinbevin"
            className="font-bold rounded-2xl p-2 hover:transform hover:translate-y-px hover:translate-x-px hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/crispin-bevin-5353b6309/"
            className="font-bold rounded-2xl p-2 hover:transform hover:translate-y-px hover:translate-x-px hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
