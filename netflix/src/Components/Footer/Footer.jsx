import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import propTypes from "prop-types";

const contactList = [
  {
    iconComponent: <BsLinkedin size={30} className="text-white" />,
    text: "chouhan-ayush",
    link: "https://www.linkedin.com/in/chouhan-ayush/",
    key: "linkedIn",
  },
  {
    iconComponent: <SiGithub size={30} className="text-white" />,
    text: "Ac-ayush",
    link: "https://github.com/Ac-ayush",
    key: "github",
  },
  {
    iconComponent: <SiLeetcode size={30} className="text-white" />,
    text: "1100+ DSA problems solved",
    link: "https://leetcode.com/u/ayush_1202/",
    key: "leetcode-questions",
  },
  {
    iconComponent: <SiLeetcode size={30} className="text-white" />,
    text: "1930+ Rating & Knight Badge",
    link: "https://leetcode.com/u/Ac-ayush/",
    key: "leetcode-contest-rating",
  },
  {
    iconComponent: <SiGeeksforgeeks size={30} className="text-white" />,
    text: "1100+ DSA problems solved",
    link: "https://www.geeksforgeeks.org/user/ayushc9977/",
    key: "geeks-for-geeks",
  },
];

const Connect = ({ iconComponent, text, link }) => {

  return (
    <div className="flex gap-2 items-center">
      {iconComponent}
      <a href={link} target="_blank" rel="noreferrer" className="text-white">
        {text}
      </a>
    </div>
  )
};

const Footer = () => {
  
  return (
    <footer className="bg-black text-white text-center pt-15 pl-5 pr-5 pb-15">
      <div className="text-white w-full">
        <hr className="border-t border-white my-4" />
      </div>
      <div className="flex justify-center items-center gap-10 p-5">
        {contactList.map((item) => (
          <Connect
            iconComponent={item.iconComponent}
            link={item.link}
            text={item.text}
            key={item.key}
          />
        ))}
      </div>

      <p>© 02/03/2025 Netflix Clone by Ayush Chouhan</p>
    </footer>
  );
};


Connect.propTypes = {
  iconComponent: propTypes.element,
  text: propTypes.string,
  link: propTypes.string,
};


export default Footer;
