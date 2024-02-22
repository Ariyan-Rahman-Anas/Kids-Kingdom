const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="mb-5">
      <h1 className="text-sm text-[#ca10ff] font-semibold underline ">
        {title}
      </h1>
      <h2 className="text-3xl  ">{subTitle}</h2>
    </div>
  );
};

export default SectionTitle;
