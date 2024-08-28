type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}
export function generateStaticParams() {
  return [ { slug: "" } ]
}
export default function Page({ params }: Params) {
  return <>
  <h1>Slug: {params.slug}</h1>
  <p>Hus ky</p>
  <p>Chihuahua, Corgi, Golden, ChouChou, Collie</p>
  </>;
}
