import Link from "next/link";
import "../styles.css";

const InfoBox = ({ text, link, btnText }: {
  text: string;
  link?: string;
  btnText?: string;
}) => (
  <div className="info-box size-full flex justify-center items-center text-balance">
    <p className='font-medium text-center sm:text-xl'>
      { text }
    </p>
    {
      link &&
      <Link href={ link } className='neo-brutalism-white neo-btn'>
        { btnText }
        {/* <img src={ arrow } alt='arrow' className='w-4 h-4 object-contain' /> */ }
      </Link>
    }
  </div>
);

export default InfoBox;