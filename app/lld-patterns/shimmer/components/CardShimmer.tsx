import { Shimmer } from "./Shimmer";

export const CardShimmer = () => {
    return (
      <div className="flex gap-4 p-4 border rounded-lg">
        <Shimmer width="150px" height="150px" className="" />
  
        <div className="flex-1">
          <Shimmer width="70%" height="20px" className="mb-2" />
          <Shimmer width="90%" height="14px" className="mb-2" />
          <Shimmer className="" width="80%" height="14px" />
        </div>
      </div>
    );
  };