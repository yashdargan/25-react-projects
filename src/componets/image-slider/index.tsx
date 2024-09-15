import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
interface IUrlProps {
  url: string;
  page?: number | null;
  limit: number;
}
interface IImageProps {
  id: number;
  author: string;
  download_url: string;
}

const ImageSlider: React.FC<IUrlProps> = ({ url, page = 1, limit }) => {
  const [image, setImage] = useState<IImageProps[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchImage = async (getUrl: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data: IImageProps[] = await response.json();
      data ? setImage(data) : null;
      setLoading(false);
    } catch (error) {
      setError((error as Error).message);
      <div>Error occured: error </div>;

      setLoading(false);
    }
  };

  const handleNext = (): void =>
    setCurrent((prev) => (prev + 1) % image.length);

  const handlePrev = (): void =>
    setCurrent((prev) => (prev - 1 + image.length) % image.length);

  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);

  if (loading) {
    <div>Loadig Please wait!!!</div>;
  }

  if (error !== null) {
    <div>Error occured{error}</div>;
  }
  return (
    <div className="flex w-full h-screen bg-gray-200 justify-center items-center">
      <img
        src={image[current]?.download_url}
        alt={image[current]?.author}
        className="flex w-1/3 h-fit"
      />
      <div className="flex absolute w-full text-3xl justify-around items-center">
        <button
          onClick={handlePrev}
          className=" left-0 transform translate-y-1/2 bg-white rounded-full"
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="right-0 bg-white transform translate-y-1/2 rounded-full"
        >
          <FiArrowRight />
        </button>
      </div>
      <div className="flex absolute gap-2">
        {image.map((_, indexItems) => (
          <span
            key={indexItems}
            className={`w-3 h-3 rounded-full ${indexItems === current ? "bg-blue-500" : "bg-zinc-500"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
