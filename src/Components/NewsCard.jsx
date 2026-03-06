import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id,
    title,
    details,
      thumbnail_url,
    total_view,
    rating,
    author,
  } = news;

  // Format Date
  const formattedDate = new Date(author.published_date).toDateString();

  return (
    <div className="card bg-base-100 shadow-md">
      {/* Top Author Section */}
      <div className="flex items-center justify-between bg-base-200 p-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt="news"
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-600">
          {details.length > 200
            ? details.slice(0, 200) + "..."
            : details}
          <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer ml-1">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4">
        {/* Rating */}
        <div className="flex items-center gap-2 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 ml-2">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;