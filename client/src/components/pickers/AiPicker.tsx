import CustomButton from "../reusableUi/CustomButton";
import { useContext } from "react";
import MainContext from "../../contexts/mainContext";
import { displayToast } from "../../utils/toast";
import { RotatingLines } from "react-loader-spinner";

export default function AiPicker() {
  //state
  const {
    prompt,
    setPrompt,
    generatingImage,
    setGeneratingImage,
    setFullDecal,
    fullDecal,
  } = useContext(MainContext);

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
      console.log("data", data.image);

      displayToast("Image generated successfully");
      console.log("data.image", data.image);
      console.log("donnée image recupérée et applique a setFullDecal");
      setFullDecal(data.image);
      setPrompt("");
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
    <div className=" relative w-64 p-4 glassmorphism  rounded-md">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <textarea
          name="prompt"
          placeholder="Enter your prompt here..."
          className=" w-full text-xs h-56 resize-none bg-transparent border border-gray-300  p-2 focus:outline-none focus:ring-1 focus:ring-slate-100"
          value={prompt}
          onChange={handleChange}
        />

        <div className="flex justify-center items-center">
          {generatingImage ? (
            <RotatingLines
              visible={true}
              height="50"
              width="50"
              strokeColor="#64748b"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              style={{}}
            />
          ) : (
            <CustomButton
              label="Ask AI"
              color={"bg-gradient-to-r from-slate-100 to-slate-300  relative"}
            />
          )}
        </div>
      </form>
    </div>
  );
}
