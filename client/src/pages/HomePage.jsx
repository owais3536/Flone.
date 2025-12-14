import { useNavigate } from 'react-router';
import { allData } from '../../public/data';
import Banner from '../components/Banner';
import ItemCard from '../components/ItemCard';
import Services from '../components/Services';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Banner />
      <Services />

      <section className='container mx-auto'>
        <div className="flex flex-col items-center gap-4">
          <h2 className='text-3xl font-bold'>New Arrival</h2>
          <span className='w-20 h-[2px] bg-black block'></span>
          <p className='text-sm'>
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-4">
          {allData.map((item) => (
            <ItemCard
              key={item.id}
              name={item.name}
              src={item.src}
              discountPrice={item.discountPrice}
              originalPrice={item.originalPrice}
              navigate={() => navigate(`/product-details/${item.id}`)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;