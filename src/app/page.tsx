// This is the root view of the app, hence it is placed in the root of the app directory.
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-black px-6 py-24 sm:py-32 lg:px-8 h-screen">
        <div className="mx-auto max-w-2xl text-center">
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