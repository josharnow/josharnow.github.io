// This is the root view of the app, hence it is placed in the root of the app directory.
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-black px-6 py-24 sm:py-32 lg:px-8 h-screen lg:pl-72">
        <div className="mx-auto max-w-2xl text-center">
          {/* <h2 className="mt-2 text-4xl font-bold tracking-light text-gray-900 md:text-6xl">HOME PAGE</h2> */}
          <h1>Welcome to my unfinished website! I&apos;m in the process of building it.</h1>
          <Image src="https://cdn-icons-png.flaticon.com/512/8999/8999474.png" alt="Work In Progress" width={ 200 } height={ 200 } />
          <Link href="/test_route">Test Route</Link>
          <br />
          <Link href="/test_route_dynamic/4">Dynamic Test Route</Link>
        </div>
      </div>
    </>
  );
}