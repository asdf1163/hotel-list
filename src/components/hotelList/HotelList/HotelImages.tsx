import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const HotelImages: React.FC<{ hotelImages: object[]; hotelId: string }> = ({
  hotelImages,
  hotelId,
}) => {
  const [position, setPosition] = useState<number>(0);
  const [displayAmountOfImages, setDisplayAmountOfImages] =
    useState<boolean>(false);

  const positionOptions = {
    valueToChangeInPercent: 100,
    amountOfImages: hotelImages.length,
    currentSlide: -(position / 100),
    changePosition: function (initalState: number) {
      if (this.amountOfImages) {
        const potentialNewValue = position + initalState;
        const minValue = potentialNewValue <= 0;
        const maxValue = this.amountOfImages > -potentialNewValue / 100;
        if (minValue && maxValue) return setPosition(potentialNewValue);
      }
    },
    changePositionToLeft: function () {
      return this.changePosition(this.valueToChangeInPercent);
    },
    changePositionToRight: function () {
      return this.changePosition(-this.valueToChangeInPercent);
    },
  };

  const conditionLeftButton = position !== 0;
  const conditionRightButton =
    positionOptions.amountOfImages !== positionOptions.currentSlide + 1;

  return (
    <div
      className="container__main__image--controller"
      onMouseOver={() => setDisplayAmountOfImages(true)}
      onMouseOut={() => setDisplayAmountOfImages(false)}
    >
      {conditionLeftButton && (
        <AiOutlineLeft
          size={50}
          className="container__main__image--button"
          style={{ left: 0 }}
          onClick={() => positionOptions.changePositionToLeft()}
        />
      )}
      <div
        className="container__main__image--resolution"
        style={{ transform: `translateX(${position}%)` }}
      >
        {hotelImages?.map((image: { url?: string }, index: number) => {
          return (
            <div
              className="container__main__image--box"
              key={`${hotelId}${index}`}
            >
              <img src={image.url} alt="hotelImage" />
            </div>
          );
        })}
      </div>
      <div
        className="container__main__image--slide"
        style={
          displayAmountOfImages ? { display: "block" } : { display: "none" }
        }
      >
        {`${positionOptions.currentSlide + 1}/${
          positionOptions.amountOfImages
        }`}
      </div>
      {conditionRightButton && (
        <AiOutlineRight
          size={50}
          className="container__main__image--button"
          style={{ right: 0 }}
          onClick={() => positionOptions.changePositionToRight()}
        />
      )}
    </div>
  );
};

export default HotelImages;
