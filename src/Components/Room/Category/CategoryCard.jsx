const CategoryCard = ({ category }) => {
  const { label, icon: Icon, description } = category;
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 hover:text-blue-800 transition cursor-pointer">
      <Icon />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryCard;
