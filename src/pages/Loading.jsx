import React from "react";

const Loading = () => {
  return (
    <div className="md:container mx-auto mt-10 flex justify-center mb-10">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600">
      </div>
    </div>
  );
};

export default Loading;
