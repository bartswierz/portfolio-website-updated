import Link from "next/link";
import IconLink from "./IconLink";

const Footer = () => {
  return (
    <footer className="bg-primary- bg-black/90- bg-black- text-white w-screen- pt-2 relative h-screen- b w-full bg-green-500- b- min-h-max">
      {/* Background */}
      {/* <div className="absolute- top-0- left-0- right-0- bottom-0- border-green-500 w-screen h-screen-"> */}
      {/* <div className="absolute- top-0 left-0 w-full h-full"> */}
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 1600 900"
        className="absolute- top-0 left-0 right-0- bottom-0- w-screen- h-screen h-max- scale-[400%]- max-h-[500px]- b"
      >
        <defs>
          <linearGradient id="bg" x2="0%" y2="100%">
            {/* <stop offset="0%" stopColor="rgba(53, 127, 242, 0.6)"></stop> */}
            <stop offset="0%" stopColor="rgba(53, 127, 242, 0.5)"></stop>
            {/* <stop offset="100%" stopColor="rgba(38, 89, 190, 0.06)"></stop> */}
            <stop offset="100%" stopColor="rgba(38, 89, 190, 0.5)"></stop>
          </linearGradient>
          {/* ORIGINAL */}
          {/* <linearGradient id="bg" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color: rgba(53, 127, 242, 0.6)"></stop>
              <stop offset="100%" style="stop-color: rgba(38, 89, 190, 0.06)"></stop>
            </linearGradient> */}
          <path
            id="wave"
            fill="url(#bg)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
      s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          />
        </defs>
        <g className="w-screen">
          <use xlinkHref="#wave" opacity=".3">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="8s"
              calcMode="spline"
              values="270 230; -334 180; 270 230"
              keyTimes="0; .5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".6">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="6s"
              calcMode="spline"
              values="-270 230;243 220;-270 230"
              keyTimes="0; .6; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".9">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="4s"
              calcMode="spline"
              values="0 230;-140 200;0 230"
              keyTimes="0; .4; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>
      {/* </div> */}
      {/* </div> */}
      {/* END OF BACKGROUND WAVES */}

      {/* <div className="bg-blue-500- absolute bottom-0 left-0 flex flex-col justify-center items-center w-full"> */}
      <ul className="flex flex-row gap-2 w-full justify-center items-center text-dark">
        <IconLink linkType="github" animationDelay={"500ms"} />
        <IconLink linkType="linkedin" animationDelay={"500ms"} />
        <IconLink linkType="resume" animationDelay={"500ms"} />
      </ul>
      <ul className="flex gap-2 justify-center py-2 ">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#work">Work Projects</Link>
          <Link href="#work" />
        </li>
        <li>
          <Link href="#personal">Personal Projects</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
          <Link href="#About" />
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <p className="text-center">BartoszSwierzynski.com © 2023 </p>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
