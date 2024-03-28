type CustomButtonProps = {
  label: string;
  onClick: () => void;
  color: string;
};

export default function CustomButton({
  label,
  onClick,
  color,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative py-3 px-8 text-zinc-900 origin-bottom -rotate-2 border-none  ${color}`}
    >
      {label}
      <div className="absolute w-full h-full top-[-5px] left-[5px] border  border-zinc-900 transition-all duration-200 ease-in-out hover:top-[-2px] hover:left-[2px] "></div>
    </button>
  );
}
