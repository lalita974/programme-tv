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
            {element.isUnseen ? <li>{"Inédit"}</li> : ""}
            {element.direct ? <li>{"Direct"}</li> : ""}
          </ul>
        </div>
      </main>
    );
  });
  return <>{prog}</>;
};

export default Programme;
