type TabProps = {};

export default function Tab({
  tab,
  onClick,
  isFilterTab,
  isActiveTab,
}: TabProps) {
  return (
    <div
      className={`w-10 h-10 flex justify-center items-center cursor-pointer select-none ${
        isFilterTab ? "rounded-full glassmorphism" : ""
      } `}
      onClick={onClick}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isActiveTab ? "w-9 h-9 opacity-1" : "w-8 h-8 opacity-80 "
        }`}
      />
    </div>
  );
}
