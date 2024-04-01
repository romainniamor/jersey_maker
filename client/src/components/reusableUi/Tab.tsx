type TabProps = {};

export default function Tab({
  tab,
  onClick,
  isFilterTab,
  isActiveTab,
}: TabProps) {
  return (
    <div
      className={`w-12 h-12  flex justify-center items-center cursor-pointer ${
        isFilterTab ? "rounded-full glassmorphism" : ""
      } `}
      onClick={onClick}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`transition-all ease-in-out duration-300 ${
          isActiveTab ? "w-10 h-10" : "w-8 h-8 opacity-80 "
        }`}
      />
    </div>
  );
}
