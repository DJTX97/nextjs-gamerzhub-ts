import HomeTitle from "../ContentComp/HomeTitle";

export default function HomeLoader() {
  return (
    <div className="w-full mx-10 rounded-2xl">
      <HomeTitle />
      <div className="grid px-10 pt-10 pb-3 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 md:gap-y-10 2xl:gap-28 md:pb-5 md:pt-12 2xl:px-20">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            className="flex flex-col justify-center h-72 2xl:h-80 cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-[150ms]"
            key={i}
          >
            <div className="w-full h-1/2 bg-theme_light_gray rounded-t-xl animate-pulse" />
            <div className="h-1/2 w-full flex flex-col align-middle gap-2 px-2 py-1 sm:py-2 bg-theme_dark_gray rounded-b-xl text-[15px]">
              <div className="h-8 mt-1 rounded-full bg-theme_light_gray animate-pulse" />
              <div className="w-1/2 h-4 rounded-full bg-theme_light_gray animate-pulse" />
              <div className="w-1/2 h-4 rounded-full bg-theme_light_gray animate-pulse" />
              <div className="w-1/2 h-4 rounded-full bg-theme_light_gray animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
