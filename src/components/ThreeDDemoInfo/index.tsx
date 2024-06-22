import "./styles.css";
import InfoBox from "./InfoBox";

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
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      // link="/about"
      // btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      // link="/projects"
      // btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      // link="/contact"
      // btnText="Let's talk"
    />
  ),
}

const ThreeDDemoInfo = ({ currentStage }: {
  currentStage: number;
}) => {
  return renderContent[currentStage] || null;
};

export default ThreeDDemoInfo;