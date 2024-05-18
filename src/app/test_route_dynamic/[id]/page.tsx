import Link from "next/link";

type Params = {
  id: string;
}

type Props = {
  params: Params;
}

export default function TestRouteDynamic({ params }: {
  params: Params;
}) {
  return (
    <>
      <h1>Hello world! This is route {params.id}</h1>
      <Link href="/">Go Home</Link>
    </>
  );
}

// NOTE - https://nextjs.org/docs/app/api-reference/functions/generate-static-params#returns
// export const dynamicParams = false;

export const generateStaticParams = async (): Promise<Params[]> => {
  // Returns all possible params for this route
  return [
    { id: '4' },
  ];
  
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const data = await res.json();

  // console.log(data);
  // return data.map((post: { id: number }) => ({ id: post.id.toString() }));
}
