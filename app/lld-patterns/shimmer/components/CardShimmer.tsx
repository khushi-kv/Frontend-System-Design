import { Shimmer } from "./Shimmer";

export const CardShimmer = () => {
  return (

    <div className="p-4 rounded-lg ">
        <Shimmer width="60%" height="20px" className="mb-2" />
        <Shimmer width="90%" height="14px" className="mb-2" />
        <Shimmer width="80%" height="14px" className="mb-2" />
    </div>
  );
};