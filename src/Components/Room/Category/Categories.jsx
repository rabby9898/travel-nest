import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  return (
    <Container>
      <div className="flex items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryCard
            key={item.label}
            item={item}
            selected={category === item.label}
          ></CategoryCard>
        ))}
      </div>
      <hr className="my-5" />
    </Container>
  );
};

export default Categories;
