import { useEffect, useState } from "react";

interface IProductProps {
  id: number;
  title?: string;
  thumbnail: string;
}
interface IUrlProps {
  url: string;
  limit: number;
  skip?: number;
}

const LoadMoreImage: React.FC<IUrlProps> = ({ url, limit }) => {
  const [product, setProduct] = useState<IProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [error, SetError] = useState<string | null>(null);
  const [disable, setDisable] = useState<boolean>(false);

  const fetchApi = async (getUrl: string) => {
    try {
      setLoading(true);
      SetError(null);
      const response = await fetch(
        `${getUrl}?limit=${limit}&skip=${count === 0 ? 0 : count * 20}`,
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProduct((prevData) => [...prevData, ...data.products]);
      }
      console.log(data);
    } catch (error) {
      <div>Error Occured {(error as Error).message}</div>;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url !== "") {
      fetchApi(url);
    }
    if (product && product.length >= 100) {
      setDisable(true);
    }
  }, [url, count]);

  if (loading) {
    <div>Loading in Progress!!!</div>;
  }

  if (error) {
    <div>Error occured {error}</div>;
  }

  return (
    <div className="flex items-center flex-col mt-2 gap-4">
      <div className="grid grid-cols-4 gap-4">
        {product && product.length ? (
          product.map((dataItems: IProductProps, index: number) => (
            <div
              className="flex flex-col items-center border border-black"
              key={`${dataItems.id}-${index}`}
            >
              <img
                key={dataItems?.id}
                src={dataItems?.thumbnail}
                alt={dataItems?.title}
              />
              <p>{dataItems.title}</p>
            </div>
          ))
        ) : (
          <div>No Product is Loading</div>
        )}
      </div>
      <button
        disabled={disable}
        className="w-[30vw] bg-sky-500 text-white border border-black px-4 py-8"
        onClick={() => setCount(() => count + 1)}
      >
        {disable ? "You have reached the 100 limit" : "Load more Products"}
      </button>
    </div>
  );
};

export default LoadMoreImage;
