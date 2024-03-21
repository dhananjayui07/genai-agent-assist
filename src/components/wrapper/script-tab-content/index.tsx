import React from "react";

const ScriptTabContent: React.FC = () => {
  return (
    <>
      <div>
        <h3 className="mb-2 text-lg leading-6 text-black  font-semibold capitalize">
          Step 1: Available Plans
        </h3>
        <div>
          {/* response instructions */}
          <div className="mb-4">
            <div className="text-black m-0 text-xs leading-4">
              Select the right plan for the customer’s needs. For customers only
              qualifying for DSL/Copper, only the best speed available is
              displayed.
            </div>
          </div>
          {/* Response Dialogues */}
          <div className="flex flex-col gap-2">
            <div className="text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]">
              <p className="m-0 leading-[18px] font-semibold">
                “What address are you seeking service for?”
              </p>
            </div>
            <div className="text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]">
              <p className="m-0 leading-[18px] font-semibold">
                “What address are you seeking service for?”
              </p>
            </div>
            <div className="text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]">
              <p className="m-0 leading-[18px] font-semibold">
                “What address are you seeking service for?”
              </p>
            </div>
            <div className="text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]">
              <p className="m-0 leading-[18px] font-semibold">
                “Do you currently reside at this address, or are you moving to
                this address?”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScriptTabContent;
