import CustomButton from "../reusableUi/CustomButton";

export default function AiPicker() {
  return (
    <div className=" w-64 p-4 glassmorphism  rounded-md">
      <form onSubmit={""} className=" flex flex-col gap-3">
        <textarea
          name="prompt"
          placeholder="Enter your prompt here..."
          className=" w-full text-xs h-56 resize-none bg-transparent border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
        ></textarea>

        <CustomButton
          label="Ask AI"
          color={"bg-gradient-to-r from-slate-100 to-slate-300  relative"}
        />
      </form>
    </div>
  );
}
