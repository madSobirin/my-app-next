import { useRouter } from "next/router";

const Product = () => {
  const { query } = useRouter();
  // console.log(router);

  return (
    <div>
      <h1>Product page</h1>
      <div className="">product : {query.id}</div>
    </div>
  );
};

export default Product;
