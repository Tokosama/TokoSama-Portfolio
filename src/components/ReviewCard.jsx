import PropTypes from "prop-types";

const ratings = new Array(5);
ratings.fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0' },
});
const ReviewCard = ({  imgSrc, }) => {
  return (
    <div className=" bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
     
          <img
            src={imgSrc}
            width={44}
            height={44}
            className="img-cover"
            loading="lazy"
          />
        
    </div>
  );
};

ReviewCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,

  
};

export default ReviewCard;
ReviewCard;
