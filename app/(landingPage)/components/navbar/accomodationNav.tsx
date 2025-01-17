import React from "react";

const StickyNavbar = ({
  navBar,
  selectedSection,
  setSelectedSection,
}: {
  navBar: string[];
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 150;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
    }
    setSelectedSection(sectionId);
  };

  return (
    <div
      className="max-sm:hidden sticky top-[67px] bg-white z-50 border-t w-full flex items-center justify-center gap-8 p-4 shadow-md overflow-x-scroll hide-scrollbar"
      style={{ transition: "box-shadow 0.3s ease-in-out " }}
    >
      {navBar.map((item, index) => (
        <div
          key={index}
          onClick={() => handleScroll(item)}
          className={`${
            selectedSection === item
              ? "border-b-2 border-b-primaryGreen font-bold"
              : ""
          } text-sm px-8 pb-4 cursor-pointer text-nowrap`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default StickyNavbar;
