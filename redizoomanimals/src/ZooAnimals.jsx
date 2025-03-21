import { useState } from "react";
import { animalList } from "./AnimalList";

export default function ZooAnimals() {
  // active at night(nocturnal)
  const [active, setActive] = useState(true);

  // -- Styling --
  const ulStyle = {
    listStyleType: "none",
  };

  const liStyle = {
    padding: "0px px 10px",
    borderRadius: "10px",
    margin: "30px 0",
    width: "400px",
    boxShadow: "2px 2px 2px 2px darkgray",
    textAlign: "center",
    backgroundColor: "#F5F5F5",
  };

  const imgStyle = {
    width: "100%",
  };

  const speciesStyle = {
    fontStyle: "italic",
    color: "darkgray",
  };

  const nameStyle = {
    color: "#58ADC5",
  };

  const speciesDay = {
    color: "#FFA90A",
  };

  const speciesNight = {
    color: "darkblue",
  };

  const containerStyle = {
    padding: "10px",
  };

  // -- End Styling --

  // Filtering
  const nocturnalAnimals = animalList.filter((a) => a.nocturnal);
  const diurnalAnimals = animalList.filter((a) => !a.nocturnal);

  // State for filtered animals
  const [filteredAnimals, setFilteredAnimals] = useState(nocturnalAnimals);

  // Create the html for each animal in the filtered list
  const animals = filteredAnimals.map((animal, i) => (
    <li style={liStyle} className={"animal"} key={`animal-${i}`}>
      <div style={containerStyle}>
        <img style={imgStyle} src={animal.pictureUrl} />
        <h1 style={nameStyle}>{animal.name}</h1>
        <p style={speciesStyle}>{animal.species}</p>
        <p style={animal.nocturnal ? speciesNight : speciesDay}>
          {animal.nocturnal ? "Nocturnal 🌛" : "Diurnal 🌞"}
        </p>
        <hr />
        <p className="animalDescription">{animal.description}</p>
      </div>
    </li>
  ));

  // Toggle active states and filter corresponding animal list
  const switchNocturnal = () => {
    setActive(true);
    setFilteredAnimals(nocturnalAnimals);
  };

  const switchDiurnal = () => {
    setActive(false);
    setFilteredAnimals(diurnalAnimals);
  };

  return (
    <>
      <div className="hero">
        <h1>ReDi Zoo Animals</h1>
        <h2>Nocturnal vs Diurnal</h2>
        <img
          className="heroImg"
          src="https://animalia.bio/img/Reptile_1.webp"
        />
        <button className={active ? "selected" : ""} onClick={switchNocturnal}>
          🌛
        </button>
        <button className={active ? "" : "selected"} onClick={switchDiurnal}>
          🌞
        </button>
      </div>
      <div className="animalContainer">
        <ul style={ulStyle}>{animals}</ul>
      </div>
    </>
  );
}
