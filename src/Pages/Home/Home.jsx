import { Helmet } from "react-helmet-async";
import Categories from "../../Components/Room/Category/Categories";
import Room from "../../Components/Room/Room";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Travel Nest | Home</title>
      </Helmet>
      <Categories></Categories>
      <Room></Room>
    </div>
  );
};

export default Home;
