import './About.css'
function About() {
  return (
    <>
    <header>
      Contact Us
    </header>
    <div className="form"><form>
        <label className="label1">Full Name</label><br></br>
        <input type="text"></input><br></br>
        <label className="label2">Email</label><br></br>
        <input type="text"></input><br></br>
        <label className="label3">Message</label><br></br>
        <input type="text"></input><br></br>
      </form></div>
      
      <div className="btn">
      <button className="btn" >Submit</button>

      </div>

      <footer>
        Copyright     @2021 CARE
      </footer>
    </>
  );
}
export default About;
