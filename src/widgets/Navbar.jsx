import resume from "../assets/crispinResume.pdf";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Switch } from "@base-ui/react/switch";

export const Navbar = ({ isProfeshMode, setIsProfeshMode }) => {
  return (
    <div className={`navbar max-sm:p-3 p-5 flex justify-end items-center   `}>
      <div className="flex gap-8 items-center">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm font-normal text-neutral-950 dark:text-white">
            <Switch.Root
              checked={isProfeshMode}
              onCheckedChange={setIsProfeshMode}
              className="flex h-5 w-9 shrink-0 border border-neutral-950 bg-white p-0.5 transition-colors duration-150 ease-[ease] dark:border-white dark:bg-neutral-950 data-checked:bg-neutral-950 dark:data-checked:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:focus-visible:outline-white"
            >
              <Switch.Thumb className="size-3.5 bg-neutral-950 transition-[translate,background-color] duration-150 ease-[ease] data-checked:translate-x-4 data-checked:bg-white dark:bg-white dark:data-checked:bg-neutral-950" />{" "}
            </Switch.Root>
            Keep it profesh
          </label>
          <a
            className="flex gap-3 bg-white text-black font-bold rounded-2xl px-6 py-3 hover:transform hover:translate-y-0.5 hover:translate-x-0.5  hover:shadow-lg hover:shadow-accent hover:cursor-pointer transition-all duration-300"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
