import Item from "./Item"

const ItemList = ({producto}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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