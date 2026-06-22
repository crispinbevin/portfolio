import { useAccount, useMMR, useMatches } from "./lib/useValStats";

export default function AltHeroSection() {
  const { data: accountInfo, isLoading: accountLoading } = useAccount();
  console.log("mic check 11");
  console.log("accountInfo", accountInfo);
  return (
    <div className="xl:mx-32 max-xl:mx-32 max-sm:mx-8 pt-32 flex flex-col lg:min-h-screen">
      <div className="flex flex-col gap-10">
        <p className="font-code font-bold text-2xl ml-1 text-zinc-300">
          Cutting to the chase here are my stats
        </p>
      </div>
    </div>
  );
}
