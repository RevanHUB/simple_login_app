import "../styles/modal.css";
export function ModalContainer({ online, checkOnline, userData }) {
  const userTechs = userData.techs;
  return (
    <div
      className="modalContainer"
      style={{ display: online === false ? "none" : "flex" }}
    >
      {online}
      <div className="modalCard">
        <div className="imgContainer">
          <img src={userData.avatar} />
        </div>
        <div className="info">
          <h1>{userData.username}</h1>
          <p className="position">{userData.position}</p>
          <ul>
            {userTechs ? userTechs.map((tech) => <li>🚀 {tech}</li>) : null}
          </ul>
          <p className="joined">🕒 {userData.createdIn}</p>
        </div>
      </div>
      <button onClick={() => checkOnline(false)}> ✖ </button>
    </div>
  );
}
export default ModalContainer;
