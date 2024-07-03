import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arow_icon from "../../assets/back_arrow_icon.png";
import { Link, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    kay: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2FjMDJmNzk2NDQ3NjJlZWM1NzMyZGUxMzE3ZjIwMSIsIm5iZiI6MTcxOTk5MzEyNi41MjkzMzgsInN1YiI6IjY1M2E0ZTE5MjgxMWExMDE0ZDYxMWY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cWFkbFYZChcdre0QxHVr09Ke98CzDuMVriHwNpiGom8",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <Link to={"/"}>
        <img src={back_arow_icon} alt="back_arow_icon" />
      </Link>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        width={"90%"}
        height={"90%"}
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
