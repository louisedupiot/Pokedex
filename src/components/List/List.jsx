import Item from "../Item";

const List = ({ list = [] }) => {

    if (list.length === 0) {
      return <div>Aucun pokemon trouvé</div>;
    }
    
  
    return (
  
      <div>
        
        {list.map(index => 
          <Item key={index.id} name={index.name} ></Item>
           )}
  
      </div>
    );
  }
export default List;