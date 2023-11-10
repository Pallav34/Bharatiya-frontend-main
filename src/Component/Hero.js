import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroIMG" src={props.heroImg} />
      </div>

      <div className="hero-text">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default Hero;
