import CustomButton from "../reusableUi/CustomButton";
import { useContext } from "react";
import MainContext from "../../contexts/mainContext";

export default function AiPicker() {
  //state
  const { prompt, setPrompt } = useContext(MainContext);

  //comportements

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.length) {
      alert("Please enter a prompt");
      return;
    }
    alert(`Submit du prompt: ${prompt}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setPrompt(e.target.value);
  };
  return (
    <div className=" w-64 p-4 glassmorphism  rounded-md">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <textarea
          name="prompt"
          placeholder="Enter your prompt here..."
          className=" w-full text-xs h-56 resize-none bg-transparent border border-gray-300  p-2 focus:outline-none focus:ring-1 focus:ring-slate-100"
          value={prompt}
          onChange={handleChange}
        ></textarea>

        <CustomButton
          label="Ask AI"
          color={"bg-gradient-to-r from-slate-100 to-slate-300  relative"}
        />
      </form>
    </div>
  );
}
