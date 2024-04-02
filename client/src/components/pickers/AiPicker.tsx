import CustomButton from "../reusableUi/CustomButton";
import { useContext } from "react";
import MainContext from "../../contexts/mainContext";
import { displayToast } from "../../utils/toast";

export default function AiPicker() {
  //state
  const { prompt, setPrompt, setGeneratingImage } = useContext(MainContext);

  //comportements

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.length) {
      displayToast("Please enter a description before submitting.");
      return;
    }
    try {
      console.log("prompt", prompt);
      setGeneratingImage(true);
      const response = await fetch(
        "http://localhost:3000/api/jersey-maker/dalle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );
      console.log("response", response);
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.error(error);
      displayToast("An error occurred. Please try again later.");
    } finally {
      setGeneratingImage(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
