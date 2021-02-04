// import logo from './logo.svg';
import './App.css';
import './style.css';
import imageSrc from "./imageInSrc.jpg"

function App() {
  let imageInPublic = <img src="/imageInPublic.jpg" alt="Public" />;
  let imageInSrc = <img src={imageSrc} alt="Src" />;
  let video = <video width="320" height="240" controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>;
  let title = <h1 className={"title red"}>Chayma Jday</h1>;
  return (
    <div className="App">
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
        {title}
        {
          [imageInPublic, imageInSrc].map(img => (
            <div>{img}</div>
          ))}

      </div>
      {video}

    </div>
  );
}

export default App;
