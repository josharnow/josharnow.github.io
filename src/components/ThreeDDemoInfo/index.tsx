// import { Link } from "react-router-dom";
import Link from "next/link";
import "./styles.css";
// import styles from "./styles.module.scss";
// import { arrow } from "../assets/icons";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
};

const renderContent: RenderContentObj = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I'm
      <span className='font-semibold mx-2 text-white'>Josh</span>
      👋
      <br />
      A Software Engineer from NY / FL
    </h1>
  ),
  2: (
    <div className="info-box">
      <p className='font-medium sm:text-xl text-center'>
        Worked with many companies <br /> and picked up many skills along the way
      </p>

      <Link href='/about' className='neo-brutalism-white neo-btn'>
        Learn more
        {/* <img src={ arrow } alt='arrow' className='w-4 h-4 object-contain' /> */ }
      </Link>
    </div>
  ),
  3: (
    <div className='info-box'>
      <p className='font-medium text-center sm:text-xl'>
        Led multiple projects to success over the years. <br /> Curious about the impact?
      </p>

      <Link href='/projects' className='neo-brutalism-white neo-btn'>
        Visit my portfolio
        {/* <img src={ arrow } alt='arrow' className='w-4 h-4 object-contain' /> */ }
      </Link>
    </div>
  ),
  4: (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
      </p>

      <Link href='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        {/* <img src={ arrow } alt='arrow' className='w-4 h-4 object-contain' /> */ }
      </Link>
    </div>
  ),
}

const InfoBox = ({ text, link, btnText }: {
  text: string;
  link: string;
  btnText: string;
}) => (
  <div className="info-box">
    {text}
  </div>
)

const ThreeDDemoInfo = ({ currentStage }: {
  currentStage: number;
}) => {
  return renderContent[currentStage] || null;
};

export default ThreeDDemoInfo;