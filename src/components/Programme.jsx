import programme from "../assets/programme.json";

const Programme = () => {
  const prog = programme.map((element) => {
    return (
      <main className="container">
        <h3>{element.time}</h3>
        <img src={element.image} alt="pic" />
        <div className="details">
          <h2>{element.title}</h2>
          <p>{element.type}</p>
          <ul>
            <h3>{element.duration}</h3>

            {<li>{element.isUnseen ? "Inédit" : ""}</li>}
            {<li>{element.direct ? "Direct" : ""}</li>}
          </ul>
        </div>
      </main>
    );
  });
  return <>{prog}</>;
};

export default Programme;
