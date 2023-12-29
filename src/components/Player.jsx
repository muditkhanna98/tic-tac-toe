import { useState } from "react";

function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const onHandleEdit = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) onChangeName(symbol, playerName);
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            className="player-symbol"
            value={playerName}
            onChange={handleNameChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onHandleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
