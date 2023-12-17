import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <Container>
      <div className="flex items-center justify-between overflow-x-auto">
        {categories.map((category) => (
          <CategoryCard key={category.label} category={category}></CategoryCard>
        ))}
      </div>
      <hr className="my-5" />
    </Container>
  );
};

export default Categories;
