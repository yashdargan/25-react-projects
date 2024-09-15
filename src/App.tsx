import Accordium from "./componets/accordium";
import Randomcolor from "./componets/random-color";
import StarRating from "./componets/star-rating";

export default function App() {
  return (
    <>
      <Accordium />
      <Randomcolor />
      <StarRating noOfStar={10} />
    </>
  );
}
