import repos, { Repo } from "@/constants/repos";
import React, { useState, useMemo } from "react";
import { debounce } from "lodash";
import RepoItem from "./RepoItem";

const RepoList = ({ searchInput }: { searchInput: string }) => {
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>(repos);

  const filterRepos = useMemo(
    () =>
      debounce((input: string) => {
        const filtered = repos.filter((repo) =>
          repo.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredRepos(filtered);
      }, 300),
    []
  );

  React.useEffect(() => {
    filterRepos(searchInput);
  }, [searchInput, filterRepos]);

  return (
    <div className="flex-1 w-full flex flex-col h-full overflow-y-auto md:overflow-auto custom-scrollbar ">
      {filteredRepos.map((repo) => (
        <RepoItem key={repo.name} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
