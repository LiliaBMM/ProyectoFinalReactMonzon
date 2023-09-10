import Item from "./Item"

const ItemList = ({producto}) => {
  return (
    <div>
      {
        producto?.map(item => (
          <Item
            key = {item.id}
            props = {item}
        />))
      }
    </div>
  )
}

export default ItemList