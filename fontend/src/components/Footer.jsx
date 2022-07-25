import { BsFillEnvelopeFill, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="align-self-bottom">
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#173243"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="mb-0 text-white bg-footer border-0m-0">
          <h4 className="text-white bg-footer py-3 text-center">Contact me</h4>
          <div className="d-flex  pb-4 justify-content-center text-white bg-footer mb-0">
            <a
              className="media"
              href="https://www.linkedin.com/in/alirbi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="fs-2 mx-2 " />
            </a>
            <a
              className="media"
              href="https://github.com/rabieeali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="fs-2 mx-2 " />
            </a>
            <a
              className="media"
              href="https://www.alirabiei1375@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillEnvelopeFill className="fs-2 mx-2 " />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
