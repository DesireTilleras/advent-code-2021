import Image from './Images/tree.png'

const Home = () => {
    return (
      <div style={{ alignItems: "center", display:"flex", flexDirection:"column" }}>
          <p>Amanda's and Dessi's adventOfCode!</p>
        <img src={Image} alt="iewh" style={{ width: "550px" }} />
      </div>
    );
}
 
export default Home;