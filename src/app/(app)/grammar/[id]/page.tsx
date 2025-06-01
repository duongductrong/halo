type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { id } = await params;
  return <div>Page: {id}</div>;
};

export default Page;
