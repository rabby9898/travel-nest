import { useSearchParams, useNavigate } from "react-router-dom";
import qs from "query-string";
const CategoryCard = ({ item, selected }) => {
  const { label, icon: Icon } = item;
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  params.get = "category";

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      const updatedQuery = { ...currentQuery, category: label };

      const url = qs.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      navigate(url);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 hover:text-blue-800 transition cursor-pointer ${
        selected ? "border-b-2 border-b-blue-700 text-blue-700" : ""
      }`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryCard;
