import { Repo } from "@/constants/repos";
import { Database } from "lucide-react";

const RepoItem = ({ repo }: { repo: Repo }) => {
  return (
    <div className="p-4 md:gap-6 flex flex-col gap-3 border-b hover:bg-[#F5F5F5] transition-colors duration-200 ease-in-out hover:cursor-pointer">
      <div className="gap-2 flex items-center">
        <span className="text-lg md:text-xl font-medium">{repo.name}</span>
        <span className="py-0.5 px-2.5 text-sm rounded-2xl bg-[#EFF8FF] border border-[#B2DDFF]">
          {repo.isPublic ? "Public" : "Private"}
        </span>
      </div>
      <div className="flex items-center gap-6 text-sm md:text-base">
        <div className="flex items-center gap-2">
          {repo.language}{" "}
          <span className="size-2 bg-primary rounded-full"></span>
        </div>
        <div className="flex items-center gap-2">
          <Database size={12} />
          {repo.size}
        </div>
        <div>{repo.lastUpdated}</div>
      </div>
    </div>
  );
};
export default RepoItem;
