import CustomButton from "../components/reusableUi/CustomButton";

type Props = {};

function Home({}: Props) {
  return (
    <div>
      <h1>Let's create</h1>
      <p>
        Fan of Captain Tsubasa!? Create your own shirt style for your favorite
        team. <strong>Unleash your imagination</strong> and define your own
        style.
      </p>
      <CustomButton />
    </div>
  );
}

export default Home;
