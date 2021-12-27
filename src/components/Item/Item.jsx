//import "./Item.css";

const Item = ({ nom, url, id }) => (
    <div
      className="class" key={id}>
      <h3>
        {nom}
      </h3>
      <div>
        {url}
      </div>
      
    </div>
  );
  
  export default Item;
  