import { SOCCER_TEAMS } from "../../data/teams";
import { useContext, useState } from "react";
import MainContext from "../../contexts/mainContext";
import { findInArray } from "../../utils/array";

export default function LogoPicker() {
  const { setLogoDecal } = useContext(MainContext);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  //state

  //comportements

  const handleClick = (teamId: number) => {
    const selectTeam = findInArray(SOCCER_TEAMS, teamId);

    setLogoDecal(selectTeam.imageSource);
    setSelectedTeam(teamId);
  };
  return (
    <div className="h-80 overflow-y-scroll w-64 p-4 pr-6 bg-slate-100 rounded-md grid grid-cols-4 gap-5">
      {SOCCER_TEAMS.map((team) => (
        <div
          key={team.id}
          className="flex items-center justify-center h-12 w-12"
        >
          <img
            src={team.imageSource}
            alt={team.name}
            className={`cursor-pointer  hover:opacity-100 hover:w-12 transition-all duration-200 ease-in-out ${
              selectedTeam === team.id ? "w-12 opacity-100" : "w-10 opacity-70" // Appliquer la largeur 12 uniquement si l'équipe est sélectionnée
            } `}
            onClick={() => handleClick(team.id)}
          />
        </div>
      ))}
    </div>
  );
}
