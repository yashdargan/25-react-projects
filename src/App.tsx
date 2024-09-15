import Accordium from "./componets/accordium";
import ImageSlider from "./componets/image-slider";
import Randomcolor from "./componets/random-color";
import StarRating from "./componets/star-rating";

export default function App() {
  return (
    <>
      <Accordium />
      <Randomcolor />
      <StarRating noOfStar={10} />
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10}/>
    </>
  );
}
