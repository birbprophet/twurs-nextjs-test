export async function getStaticPaths() {
  // TODO
  const paths = [];
  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  // TODO
  const data = {};

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default function Guide() {
  return (
    <div className="h-screen w-screen flex">
      <div className="m-auto text-2xl font-medium">
        Todo: display guide title, subtitle, and content
      </div>
    </div>
  );
}
