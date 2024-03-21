import React from "react";
import KnowledgeBaseSearch from "./knowledge-base-search";

const Insights: React.FC = () => {
  return (
    <div className="p-4 bg-[#7EDEF1] rounded-b-xl min-h-72">
      <h3 className="text-lg leading-6 text-black mb-4 font-semibold">
        Insights
      </h3>
      <KnowledgeBaseSearch />
    </div>
  );
};

export default Insights;
