"use client";
import { HeroParallax } from "@/src/components";
import reactNativeScreenshot from '@/src/assets/images/technologies/technologies-react-native.png';
import awsScreenshot from '@/src/assets/images/technologies/technologies-aws.png';
import chartJSScreenshot from '@/src/assets/images/technologies/technologies-chart-js.png';
import cloudflareScreenshot from '@/src/assets/images/technologies/technologies-cloudflare.png';
import firebaseScreenshot from '@/src/assets/images/technologies/technologies-firebase.png';
import flaskScreenshot from '@/src/assets/images/technologies/technologies-flask.png';
import framerMotionScreenshot from '@/src/assets/images/technologies/technologies-framer-motion.png';
import jiraScreenshot from '@/src/assets/images/technologies/technologies-jira.png';
import mapboxScreenshot from '@/src/assets/images/technologies/technologies-mapbox.png';
import mongoDBScreenshot from '@/src/assets/images/technologies/technologies-mongo-db.png';
import mySQLScreenshot from '@/src/assets/images/technologies/technologies-mysql.png';
import pandasScreenshot from '@/src/assets/images/technologies/technologies-pandas.png';
import sendgridScreenshot from '@/src/assets/images/technologies/technologies-sendgrid.png';
import tailwindCSSScreenshot from '@/src/assets/images/technologies/technologies-tailwind-css.png';
import twilioScreenshot from '@/src/assets/images/technologies/technologies-twilio.png';

function AboutPageTechnologies() {
  // TODO - Sites & screenshots
  const products = [
    {
      title: "Framer Motion",
      link: "https://www.framer.com/motion/",
      thumbnail: framerMotionScreenshot.src,
    },
    {
      title: "Twilio",
      link: "https://www.twilio.com",
      thumbnail: twilioScreenshot.src,
    },
    {
      title: "Cloudflare",
      link: "https://www.cloudflare.com",
      thumbnail: cloudflareScreenshot.src,
    },
    {
      title: "AWS",
      link: "https://aws.amazon.com",
      thumbnail: awsScreenshot.src,
    },
    {
      title: "React Native",
      link: "https://reactnative.dev",
      thumbnail: reactNativeScreenshot.src,
    },
    {
      title: "Firebase",
      link: "https://firebase.google.com",
      thumbnail: firebaseScreenshot.src,
    },
    {
      title: "MongoDB",
      link: "https://www.mongodb.com",
      thumbnail: mongoDBScreenshot.src,
    },

    {
      title: "ChartJS",
      link: "https://www.chartjs.org",
      thumbnail: chartJSScreenshot.src,
    },
    {
      title: "MySQL",
      link: "https://www.mysql.com/",
      thumbnail: mySQLScreenshot.src,
    },
    {
      title: "Flask",
      link: "https://flask.palletsprojects.com/en/3.0.x/",
      thumbnail: flaskScreenshot.src,
    },

    {
      title: "Jira",
      link: "https://www.atlassian.com/software/jira",
      thumbnail: jiraScreenshot.src,
    },

    {
      title: "Sendgrid",
      link: "https://sendgrid.com",
      thumbnail: sendgridScreenshot.src,
    },
    {
      title: "Tailwind CSS",
      link: "https://tailwindcss.com",
      thumbnail: tailwindCSSScreenshot.src,
    },
    {
      title: "Pandas",
      link: "https://pandas.pydata.org",
      thumbnail: pandasScreenshot.src,
    },
    {
      title: "Mapbox GL JS",
      link: "https://www.mapbox.com",
      thumbnail: mapboxScreenshot.src,
    },
  ];

  return (
    <div id="technologies" className="w-full">
      <HeroParallax products={products} />
    </div>
  );
}
export default AboutPageTechnologies;