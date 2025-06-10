"use client";
import React from 'react';
import Image from 'next/image';
import { 
  ParallaxScrollChain,
} from '@/src/components';
import appleLogo from "@/src/assets/icons/apple.svg";
import appstoreLogo from "@/src/assets/icons/appstore.svg";
import awsLogo from "@/src/assets/icons/aws.svg";
import axiosLogo from "@/src/assets/icons/axios.svg";
import chartJsLogo from "@/src/assets/icons/chartjs.svg";
import cloudflareLogo from "@/src/assets/icons/cloudflare.svg";
import cssLogo from "@/src/assets/icons/css.svg";
import dockerLogo from "@/src/assets/icons/docker.svg";
import ethersJsLogo from "@/src/assets/icons/ethersjs.svg";
import expressJsLogo from "@/src/assets/icons/expressjs.svg";
import firebaseLogo from "@/src/assets/icons/firebase.svg";
import flaskLogo from "@/src/assets/icons/flask.svg";
import framerLogo from "@/src/assets/icons/framer.svg";
import gitLogo from "@/src/assets/icons/git.svg";
import githubActionsLogo from "@/src/assets/icons/githubactions.svg";
import googleGLogo from "@/src/assets/icons/googleg.svg";
import googleMapsLogo from "@/src/assets/icons/googlemaps.svg";
import googlePlayConsoleLogo from "@/src/assets/icons/googleplay.svg";
import htmlLogo from "@/src/assets/icons/html.svg";
import ionicLogo from "@/src/assets/icons/ionic.svg";
import javaLogo from "@/src/assets/icons/java.svg";
import javaSpringLogo from "@/src/assets/icons/spring.svg";
import jiraLogo from "@/src/assets/icons/jira.svg";
import jQueryLogo from "@/src/assets/icons/jquery.svg";
import mapboxLogo from "@/src/assets/icons/mapbox.svg";
import mariaDbLogo from "@/src/assets/icons/mariadb.svg";
import mongoDbLogo from "@/src/assets/icons/mongodb.svg";
import mongooseLogo from "@/src/assets/icons/mongoose.svg";
import mySqlLogo from "@/src/assets/icons/mysql.svg";
import nextJsLogo from "@/src/assets/icons/nextjs.svg";
import nodeJsLogo from "@/src/assets/icons/nodejs.svg";
import pandasLogo from "@/src/assets/icons/pandas.svg";
import piniaLogo from "@/src/assets/icons/pinia.svg";
import postmanLogo from "@/src/assets/icons/postman.svg";
import pythonLogo from "@/src/assets/icons/python.svg";
import reactLogo from "@/src/assets/icons/react.svg";
import reactNativeLogo from "@/src/assets/icons/reactnative.svg";
import remixLogo from "@/src/assets/icons/remix.svg";
import sendgridLogo from "@/src/assets/icons/sendgrid.svg";
import solidityLogo from "@/src/assets/icons/solidity.svg";
import sqlLogo from "@/src/assets/icons/sql.svg";
import sqlAlchemyLogo from "@/src/assets/icons/sqlalchemy.svg";
import swiperJsLogo from "@/src/assets/icons/swiperjs.svg";
import tailwindCssLogo from "@/src/assets/icons/tailwindcss.svg";
import twilioLogo from "@/src/assets/icons/twilio.svg";
import typescriptLogo from "@/src/assets/icons/typescript.svg";
import videoJsLogo from "@/src/assets/icons/videojs.svg";
import vsCodeLogo from "@/src/assets/icons/vscode.svg";
import vueJsLogo from "@/src/assets/icons/vue.svg";
import web3JsLogo from "@/src/assets/icons/web3js.svg";
import xcodeLogo from "@/src/assets/icons/xcode.svg";
import cLogo from '@/src/assets/icons/c++.svg';
import pytestLogo from '@/src/assets/icons/pytest.svg';




const contentArrContainer: ContentArrContainer = {
  programming_languages: [
    {
      title: "JavaScript / TypeScript",
      imageSrc: typescriptLogo,
      category: "Programming Languages",
      url: "https://www.typescriptlang.org/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image 
            alt="technology-logo"
            src={typescriptLogo} 
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Python",
      description:
        "",
      imageSrc: pythonLogo,
      category: "Programming Languages",
      url: "https://www.python.org/",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ pythonLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Java",
      imageSrc: javaLogo,
      category: "Programming Languages",
      url: "https://www.java.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ javaLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "C/C++",
      imageSrc: cLogo,
      category: "Programming Languages",
      url: "https://devdocs.io/cpp/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ cLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Solidity",
      imageSrc: solidityLogo,
      category: "Programming Languages",
      url: "https://soliditylang.org/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ solidityLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "HTML5",
      imageSrc: htmlLogo,
      category: "Programming Languages",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ htmlLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "SCSS/CSS3",
      imageSrc: cssLogo,
      category: "Programming Languages",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ cssLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "SQL",
      imageSrc: sqlLogo,
      category: "Programming Languages",
      url: "",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ cssLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
  ],
  libraries: [
    {
      title: "React.js",
      imageSrc: reactLogo,
      category: "Libraries",
      url: "https://reactjs.org/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ reactLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "ChartJS",
      imageSrc: chartJsLogo,
      category: "Libraries",
      url: "https://www.chartjs.org/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ chartJsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Mapbox GL JS",
      imageSrc: mapboxLogo,
      category: "Libraries",
      url: "https://docs.mapbox.com/mapbox-gl-js/api/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ mapboxLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Firebase",
      imageSrc: firebaseLogo,
      category: "Libraries",
      url: "https://firebase.google.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ firebaseLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "jQuery",
      imageSrc: jQueryLogo,
      category: "Libraries",
      url: "https://jquery.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ jQueryLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Pandas",
      imageSrc: pandasLogo,
      category: "Libraries",
      url: "https://pandas.pydata.org/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ pandasLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Swiper.js",
      imageSrc: swiperJsLogo,
      category: "Libraries",
      url: "https://swiperjs.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ swiperJsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Video.js",
      imageSrc: videoJsLogo,
      category: "Libraries",
      url: "https://videojs.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ videoJsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Axios",
      imageSrc: axiosLogo,
      category: "Libraries",
      url: "https://axios-http.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ axiosLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Framer Motion",
      imageSrc: framerLogo,
      category: "Libraries",
      url: "https://www.framer.com/motion/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ framerLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Pinia",
      imageSrc: piniaLogo,
      category: "Libraries",
      url: "https://pinia.esm.dev/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ piniaLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Vue Router",
      imageSrc: vueJsLogo,
      category: "Libraries",
      url: "https://router.vuejs.org/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ vueJsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Web3.js",
      imageSrc: web3JsLogo,
      category: "Libraries",
      url: "https://web3js.readthedocs.io/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ web3JsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Ethers.js",
      imageSrc: ethersJsLogo,
      category: "Libraries",
      url: "https://docs.ethers.io/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ ethersJsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
  ],
  frameworks: [
    {
      title: "React Native",
      imageSrc: reactNativeLogo,
      category: "Frameworks",
      url: "https://reactnative.dev/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ reactNativeLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Vue.js",
      imageSrc: vueJsLogo,
      category: "Frameworks",
      url: "https://vuejs.org/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ vueJsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Ionic / Capacitor",
      imageSrc: ionicLogo,
      category: "Frameworks",
      url: "https://ionicframework.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ ionicLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Next.js",
      imageSrc: nextJsLogo,
      category: "Frameworks",
      url: "https://nextjs.org/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ nextJsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Express.js",
      imageSrc: expressJsLogo,
      category: "Frameworks",
      url: "https://expressjs.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ expressJsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Flask",
      imageSrc: flaskLogo,
      category: "Frameworks",
      url: "https://flask.palletsprojects.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ flaskLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Pytest",
      imageSrc: pytestLogo,
      category: "Frameworks",
      url: "https://docs.pytest.org/en/stable/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ pytestLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Tailwind CSS",
      imageSrc: tailwindCssLogo,
      category: "Frameworks",
      url: "https://tailwindcss.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ tailwindCssLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
  ],
  databases_orms: [
    {
      title: "MySQL",
      imageSrc: mySqlLogo,
      category: "Databases / ORMs / ODMs",
      url: "https://www.mysql.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ mySqlLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "MongoDB",
      imageSrc: mongoDbLogo,
      category: "Databases / ORMs / ODMs",
      url: "https://www.mongodb.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ mongoDbLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "MariaDB",
      imageSrc: mariaDbLogo,
      category: "Databases / ORMs / ODMs",
      url: "https://mariadb.org/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ mariaDbLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "SQLAlchemy",
      imageSrc: sqlAlchemyLogo,
      category: "Databases / ORMs / ODMs",
      url: "https://www.sqlalchemy.org/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ sqlAlchemyLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Mongoose",
      imageSrc: mongooseLogo,
      category: "Databases / ORMs / ODMs",
      url: "https://mongoosejs.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ mongooseLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
  ],
  software: [
    {
      title: "Visual Studio Code",
      imageSrc: vsCodeLogo,
      category: "Software",
      url: "https://code.visualstudio.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ vsCodeLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Git",
      imageSrc: gitLogo,
      category: "Software",
      url: "https://git-scm.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ gitLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Xcode",
      imageSrc: xcodeLogo,
      category: "Software",
      url: "https://developer.apple.com/xcode/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ xcodeLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Android Studio",
      imageSrc: googleGLogo,
      category: "Software",
      url: "https://developer.android.com/studio",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ googleGLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Docker",
      imageSrc: dockerLogo,
      category: "Software",
      url: "https://www.docker.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ dockerLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Java Spring",
      imageSrc: javaSpringLogo,
      category: "Software",
      url: "https://spring.io/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ javaSpringLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Remix IDE",
      imageSrc: remixLogo,
      category: "Software",
      url: "https://remix.run/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ remixLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Node.js",
      imageSrc: nodeJsLogo,
      category: "Software",
      url: "https://nodejs.org/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ nodeJsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Jira",
      imageSrc: jiraLogo,
      category: "Software",
      url: "https://www.atlassian.com/software/jira",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ jiraLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Postman",
      imageSrc: postmanLogo,
      category: "Software",
      url: "https://www.postman.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ postmanLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Apple App Store Connect",
      imageSrc: appstoreLogo,
      category: "Software",
      url: "https://appstoreconnect.apple.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ appstoreLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Google Play Console",
      imageSrc: googlePlayConsoleLogo,
      category: "Software",
      url: "https://developer.android.com/distribute/console",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ googlePlayConsoleLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
  ],
  cloud_computing_ci_cd: [
    {
      title: "AWS - Elastic Beanstalk",
      imageSrc: awsLogo,
      category: "Cloud Computing / CI / CD",
      url: "https://aws.amazon.com/elasticbeanstalk/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ awsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "AWS - EC2",
      imageSrc: awsLogo,
      category: "Cloud Computing / CI / CD",
      url: "https://aws.amazon.com/ec2/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ awsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "AWS - S3",
      imageSrc: awsLogo,
      category: "Cloud Computing / CI / CD",
      url: "https://aws.amazon.com/s3/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ awsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "AWS - RDS",
      imageSrc: awsLogo,
      category: "Cloud Computing / CI / CD",
      url: "https://aws.amazon.com/rds/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ awsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "AWS - CloudFront",
      imageSrc: awsLogo,
      category: "Cloud Computing / CI / CD",
      url: "https://aws.amazon.com/cloudfront/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ awsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "AWS - Lambda",
      imageSrc: awsLogo,
      category: "Cloud Computing / CI / CD",
      url: "https://aws.amazon.com/lambda/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ awsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "AWS - MediaConvert",
      imageSrc: awsLogo,
      category: "Cloud Computing / CI / CD",
      url: "https://aws.amazon.com/mediaconvert/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
                    <Image
            alt="technology-logo"
            src={ awsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Cloudflare",
      imageSrc: cloudflareLogo,
      category: "Cloud Computing / CI / CD",
      url: "https://www.cloudflare.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ cloudflareLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "GitHub Actions",
      imageSrc: githubActionsLogo,
      category: "Cloud Computing / CI / CD",
      url: "https://docs.github.com/en/actions",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ githubActionsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Xcode Cloud",
      imageSrc: xcodeLogo,
      category: "Cloud Computing / CI / CD",
      url: "https://developer.apple.com/xcode/cloud/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ xcodeLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
  ],
  // design: [
  //   {
  //     title: "Figma",
  //     description:
  //       "",
  //     content: (
  //       <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
  //         
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Adobe XD",
  //     description:
  //       "",
  //     content: (
  //       <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
  //         
  //       </div>
  //     ),
  //   },
  // ],
  apis: [
    {
      title: "Mapbox GL JS",
      imageSrc: mapboxLogo,
      category: "APIs",
      url: "https://docs.mapbox.com/mapbox-gl-js/api/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ mapboxLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Google Places",
      imageSrc: googleMapsLogo,
      category: "APIs",
      url: "https://developers.google.com/maps/documentation/places/web-service/overview",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ googleMapsLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Twilio",
      imageSrc: twilioLogo,
      category: "APIs",
      url: "https://www.twilio.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ twilioLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Sendgrid",
      imageSrc: sendgridLogo,
      category: "APIs",
      url: "https://sendgrid.com/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ sendgridLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Sign In With Apple",
      imageSrc: appleLogo,
      category: "APIs",
      url: "https://developer.apple.com/sign-in-with-apple/",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ appleLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
    {
      title: "Google Sign-In",
      imageSrc: googleGLogo,
      category: "APIs",
      url: "https://developers.google.com/identity/sign-in/web/sign-in",
      description:
        "",
      content: (
        <div className="size-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white shadow-3xl p-2">
          <Image
            alt="technology-logo"
            src={ googleGLogo }
            className="object-cover w-auto h-full"
          />
        </div>
      ),
    },
  ],
}


export default function TechnologiesPage() {

  return (
    <>
      <ParallaxScrollChain
        // images={ contentArrContainer.programming_languages.map((content) => content.imageSrc as string) }
        contentArrContainer={ contentArrContainer }
        className='h-full'
      />
    </>
  );
}
