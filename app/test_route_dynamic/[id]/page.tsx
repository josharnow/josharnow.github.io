import Link from "next/link";

export default function TestRouteDynamic({ params }: {
  params: {
    id: string;
  };
}) {
  return (
    <>
      <h1>Hello world! This is route {params.id}</h1>
      <Link href="/">Go Home</Link>
    </>
  );
}
