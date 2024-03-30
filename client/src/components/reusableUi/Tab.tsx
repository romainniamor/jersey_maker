type TabProps = {};

export default function Tab({ tab, onClick, isActiveTab }: TabProps) {
  return (
    <div
      className="w-9 h-9 flex justify-center items-center cursor-pointer select-none"
      onClick={onClick}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isActiveTab ? "w-8 h-8 opacity-1" : "w-7 h-7 opacity-50 "
        }`}
      />
    </div>
  );
}
