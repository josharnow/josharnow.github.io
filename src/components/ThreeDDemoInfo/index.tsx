import InfoBox from "./InfoBox";
import "./styles.css";

const renderContent: RenderContentObj = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      {`Hi, I'm`}
      <span className='font-semibold mx-2 text-white'>Josh</span>
      👋
      <br />
      A Software Engineer from NY / FL
    </h1>
  ),
  2: (
    <InfoBox
      // text="This is a simple 3D demo I put together while learning React Three Fiber (R3F). Tools that I use more often can be found on my technologies page!"
      text="This is a simple interactive 3D demo I put together while learning React Three Fiber (R3F). Check out my portfolio to see some larger projects!"
      link="/portfolio"
      btnText="My Portfolio Sample"
    />
  ),
  3: (
    <InfoBox
      text="I have yet to use R3F in the course of my career but thought it was a fun tool to add to my belt. The ones that see the most use can be found on my technologies page!"
      link="/technologies"
      btnText="My Technologies"
    />
  ),
  4: (
    <InfoBox
      text="Want to get in touch? I'd love to hear from you! Simply tap the contact button in the tab bar to choose your preferred method."
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