import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel = () => {
  // Array of image URLs
  const images = [
    "https://i.ibb.co/HDpNj1W/11.png",
    "https://i.ibb.co/z727qcr/22.png",
    "https://i.ibb.co/KGPZPgs/33.png",
    "https://i.ibb.co/6XP9TkB/44.png",
    "https://i.ibb.co/c2Q4X5P/55.png",
    "https://i.ibb.co/VWgjZfL/66.png",
    "https://i.ibb.co/8xtG9QC/77.png",
    "https://i.ibb.co/n6fP9Fp/88.png",
  ];

  // Array of data objects containing heading, details, and button text
  const bannerData = [
    {
      id: 1,
      heading: "Interactive Robot Toy",
      details:
        "Bring home this adorable robot toy that responds to voice commands and gestures. With its colorful lights and fun sounds. Perfect for sparking creativity and imagination!",
      button: "Add to Cart",
    },
    {
      id: 2,
      heading: "Building Blocks Set",
      details:
        "Unleash your child's creativity with this building blocks set. Featuring vibrant colors and various shapes, develop fine motor skills. Let your little one's imagination run wild!",
      button: "Shop Now",
    },
    {
      id: 3,
      heading: "Dollhouse with Furniture",
      details:
        "Create magical moments with this charming dollhouse complete with furniture and accessories. Your child will love arranging the rooms. It's a timeless toy that fosters imaginative play.",
      button: "View Details",
    },
    {
      id: 4,
      heading: "Remote Control Car",
      details:
        "Experience the thrill of racing with this high-speed remote control car. With its sleek design and powerful motor, it's sure to impress kids and adults alike. Get ready for epic adventures!",
      button: "Buy Now",
    },
    {
      id: 5,
      heading: "Art and Craft Kit",
      details:
        "Ignite your child's creativity with this comprehensive art and craft kit. Packed with colorful supplies and project ideas, it's perfect for rainy days and creative playdates. Let their imagination soar!",
      button: "Add to Wishlist",
    },
    {
      id: 6,
      heading: "Educational Puzzle Set",
      details:
        "Make learning fun with this engaging puzzle set. Each puzzle piece features a different animal or object, helping children learn about more. It's a great way to promote cognitive development!",
      button: "Explore",
    },
    {
      id: 7,
      heading: "Musical Instruments Set",
      details:
        "Introduce your child to the world of music with this delightful instruments set. From drums to xylophones, it includes everything they need to create beautiful melodies. Let the music play!",
      button: "Shop Now",
    },
    {
      id: 8,
      heading: "Outdoor Playhouse",
      details:
        "Encourage outdoor play with this charming playhouse. With its sturdy construction and imaginative design, it's perfect for backyard adventures and endless fun. Let your little ones' imaginations run wild!",
      button: "View Options",
    },
  ];

  // State to track the current index of the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to navigate to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[100vh] lg:h-[100vh] w-full lg:w-[85%] mx-auto overflow-hidden">
      {/* Carousel container */}
      <div className="relative">
        {/* Image slides */}
        <div className="overflow-hidden">
          <div className="flex">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`h-[100vh] rounded-lg lg:h-[100vh] w-full transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ display: index === currentIndex ? "block" : "none" }}
              />
            ))}
          </div>
        </div>
        {/* Overlay containing data */}
        <div className="absolute inset-0 rounded-lg flex flex-col justify-center items-center p-6 bg-black bg-opacity-70 text-white text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-semibold text-center">
            {bannerData[currentIndex]?.heading}
          </h2>
          {/* Details */}
          <p className="text-white w-full my-4 md:w-3/4 2order-2 ">
            {bannerData[currentIndex]?.details}
          </p>
          {/* Button */}
          <button className="px-4 py-2 text-white bg-[#ca10ff] hover:text-black rounded-md hover:bg-gray-200 duration-500 ">
            {bannerData[currentIndex]?.button}
          </button>
        </div>
      </div>
      {/* Previous and next buttons */}
      <div className="flex items-center justify-between md:justify-end gap-8  w-full absolute bottom-0 p-2 ">
        {/* Previous button */}
        <IoIosArrowBack
          className="text-5xl bg-[#ca10ff] text-gray-200 p-1 rounded-full hover:text-black hover:bg-white cursor-pointer duration-500 "
          //   className="text-5xl text-white hover:text-gray-200 cursor-pointer"
          onClick={goToPrevious}
        />
        {/* Next button */}
        <IoIosArrowForward
          className="text-5xl bg-[#ca10ff] text-gray-200 p-1 rounded-full hover:text-black hover:bg-white cursor-pointer duration-500 "
          //   className="text-5xl text-white hover:text-gray-200 cursor-pointer"
          onClick={goToNext}
        />
      </div>
      {/* Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-5 h-1 rounded-full ${
              index === currentIndex
                ? "bg-[#ca10ff] "
                : "bg-gray-400 hover:bg-[#ca10ff] "
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
export default Carousel;