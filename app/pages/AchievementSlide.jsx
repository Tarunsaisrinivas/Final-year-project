import { Carousel } from 'antd';
import 'antd/dist/reset.css'; 
import { images } from '../constant/imageData'; 

const AchievementSlide = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-6xl w-full">
        {/* <h1 className="text-2xl font-bold text-center mb-8">Our Features</h1> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold text-center mb-4">MILESTONES</h2>
            <Carousel autoplay arrows autoplaySpeed={2000} draggable >
              {images[0].map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover rounded-lg cursor-pointer" />
                </div>
              ))}
            </Carousel>
          </div>

         
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold text-center mb-4">ACHIEVEMENTS</h2>
            <Carousel autoplay arrows autoplaySpeed={2500} draggable>
              {images[1].map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover rounded-lg cursor-pointer" />
                </div>
              ))}
            </Carousel>
          </div>

      
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold text-center mb-4">HAPPENINGS</h2>
            <Carousel autoplay arrows autoplaySpeed={3000} draggable>
              {images[2].map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover rounded-lg cursor-pointer" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementSlide;
