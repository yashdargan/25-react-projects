import { useState } from "react";
import { CiStar } from "react-icons/ci";

interface IStarRatingProp {
  noOfStar?: number;
}
const StarRating: React.FC<IStarRatingProp> = ({ noOfStar = 5 }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  const handleOnClick = (getCurrentState: number): void => {
    setRating(getCurrentState);
  };
  const handleOnMouseOver = (getCurrentState: number): void => {
    setHover(getCurrentState);
  };
  const handleOnMouseLeave = (): void => {
    setRating(rating);
  };
  return (
    <div className="flex justify-center items-center gap-1 text-3xl bg-stone-200">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <CiStar
            key={index}
            onClick={() => handleOnClick(index)}
            onMouseOver={() => handleOnMouseOver(index)}
            onMouseLeave={() => handleOnMouseLeave}
            className={`cursor-pointer transition-colors duration-200 ${index <= (hover || rating || 0)
                ? "text-yellow-400"
                : "text-zinc-400"
              }`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
