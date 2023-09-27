const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      <div className="m-3 w-full h-16 border-2 border-solid border-slate-400 bg-slate-100"></div>
      {Array(20)
        .fill("")
        .map((e, Idx) => (
          <div
            key={Idx}
            className=" m-3 w-52 h-60 border-2 border-solid border-slate-400 bg-slate-100 rounded-xl"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
