import PageBanner from "../../Shared Components/PageBanner";
import aboutBanner from "./../../assets/about.jpg";
const AboutPage = () => {
  return (
    <div className="mt-5">
      <PageBanner currentLocation={"Home > About"}></PageBanner>
      <div className=" text-center text-sm my-10 ">
        <div className="px-2">
          <h1 className="md:text-4xl mb-3 ">WHAT MAKE US DIFFERENT</h1>
          <p className="w-full md:w-2/3 mx-auto ">
            A great About Us page helps builds trust between you and your
            customers. The more content you provide about you and your business,
            the more confi-dent people will be when purchasing from your store.
          </p>
        </div>
        <div className="w-[99.5%] md:w-[90%] mx-auto my-10 ">
          <div>
            <img
              src={aboutBanner}
              alt="about display picture"
              className="w-full rounded-lg "
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-left mt-8 ">
            <div className="left">
              <h1 className="underline text-[#ca10ff] text-2xl font-semibold ">
                OUR MISSION
              </h1>
              <p className="mt-1">
                Fourth hath rule Evening Creepeth own lesser years itself so
                seed fifth for grass evening fourth shall you’re unto that. Had.
                Female replenish for yielding so saw all one to yielding grass
                you’ll air sea it, open waters subdue, hath.
              </p>
            </div>
            <div className="right">
              <h1 className="underline text-[#ca10ff] text-2xl font-semibold ">
                OUR VISION
              </h1>
              <p className="mt-1 ">
                Fourth hath rule Evening Creepeth own lesser years itself so
                seed fifth for grass evening fourth shall you’re unto that. Had.
                Female replenish for yielding so saw all one to yielding grass
                you’ll air sea it, open waters subdue, hath.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
