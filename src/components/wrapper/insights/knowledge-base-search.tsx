import React, { useCallback, useRef, useState } from "react";
import useClickOutside from "../use-click-outside";

const KnowledgeBaseSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionBoxRef = useRef<HTMLDivElement>(null);
  const [stepFaqs] = useState([
    {
      faq: "What is Lorem Ipsum?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      faq: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      faq: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
  ]);
  const [suggestions, setSuggestions] = useState<{ faq: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  let suggestionsData = [
    { faq: "What is Lorem Ipsum?" },
    { faq: "Why do we use it?" },
    { faq: "Where does it come from?" },
    { faq: "What is Lorem Ipsum Generator?" },
    { faq: "How to generate Lorem Ipsum text?" },
  ];

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchQuery = event.target.value.trim();
      console.log("Search Query: ", searchQuery);
    },
    []
  );

  const handleInputFocus = () => {
    setSuggestions(suggestionsData);
  };

  const handleSuggestionClick = useCallback((suggestion: string) => {
    if (inputRef.current) {
      inputRef.current.value = suggestion;
      setSuggestions([]);
    }
  }, []);

  const handleClickOutside = () => {
    setSuggestions([]);
  };
  useClickOutside(suggestionBoxRef, handleClickOutside);

  const handleSendButtonClick = () => {
    const inputValue = inputRef.current?.value.trim();
    if (!inputValue) {
      setErrorMessage("Please enter a search query");
      return;
    }
    setLoading(true);
    console.log("Input Value: ", inputValue);
    // Reset error message when send button is clicked with valid input
    setErrorMessage("");
  };

  return (
    <>
      <div className="flex rounded-lg bg-[#CDF6FF]">
        <div className="relative flex h-10 rounded-lg flex-grow items-stretch focus-within:z-10">
          <input
            type="text"
            ref={inputRef}
            className="block h-10 w-full outline-none bg-[#CDF6FF] focus:bg-white rounded-lg border-0 py-1.5 pl-3 text-[#1F1F1F] ring-0 focus:border-none focus:ring-0 focus-visible:ring-0 placeholder:text-[#1F1F1F] text-sm font-normal"
            placeholder="Ask a question"
            onFocus={handleInputFocus}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={handleSendButtonClick}
            className="absolute right-2 top-2 w-6 h-6 flex items-center justify-center rounded-full text-xs font-normal text-white bg-black"
          >
            {loading ? "..." : "GO"}
          </button>
          {suggestions.length > 0 && (
            <div
              ref={suggestionBoxRef}
              className="absolute z-10 w-full bg-white shadow-sm rounded-b-lg px-2 pt-1 top-9 overflow-hidden"
            >
              <div className="pb-3">
                <div className="mb-2 h-[1px] bg-[#f1f1f1]" />
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-2 py-1 cursor-pointer text-xs leading-5 font-semibold"
                    onClick={() => handleSuggestionClick(suggestion.faq)}
                  >
                    {suggestion.faq}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {errorMessage && (
        <p className="text-red-700 font-medium text-[12px] mt-2">
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default KnowledgeBaseSearch;
