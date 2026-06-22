import CareerSummary from "@/widgets/CareerSummary";
export default function HeroSection() {
  return (
    <div className="xl:mx-32 max-xl:mx-32 max-sm:mx-8 pt-32 flex flex-col lg:min-h-screen">
      <div className="flex flex-col gap-10">
        <p className="font-code font-bold text-2xl ml-1 text-zinc-300">
          Hi, my name is
        </p>
        <div className="font-inter text-8xl max-md:text-6xl flex flex-col gap-6 font-extrabold">
          <h1>Crispin Jithin Bevin</h1>
          <p className="text-zinc-600 text-3xl">I'm a Software Engineer</p>
        </div>
        <div className="text-zinc-400 mr-90 max-lg:mr-32 max-sm:mr-8 leading-9"></div>
      </div>
      <CareerSummary />
    </div>
  );
}
