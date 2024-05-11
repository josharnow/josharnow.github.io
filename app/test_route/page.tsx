
import Link from "next/link";
import Image from "next/image";

export default async function TestRoute() {
  const res = await fetch("https://api.github.com/users/josharnow");
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h1>Hello world!</h1>
      <h1>{data.id}</h1>
      <Image src={data.avatar_url} alt="GitHub Avatar" width={200} height={200} />
      <Link href="/">Go Home</Link>
    </>
  );
}
