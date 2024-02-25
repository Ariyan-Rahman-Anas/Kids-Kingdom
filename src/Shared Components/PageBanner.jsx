import bannerBG from "./../assets/cover.png";
const PageBanner = ({ currentLocation }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.0)), url(${bannerBG})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-[20rem] flex items-end justify-center "
      >
        <p className="px-4 py-1 bg-[#ca10ff] text-white rounded-t-md  ">
          {currentLocation}
        </p>
      </div>
    </div>
  );
};
export default PageBanner;