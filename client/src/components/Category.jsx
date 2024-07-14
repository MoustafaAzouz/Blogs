 
const Category = ({activeCateogry,onselectedcategory}) => {
    const categories=["Startups","Security","AI","Apps","Tech"];
  return (
    <div className="  lg:space-x-7 flex flex-nowrap items-center  border-b-2 py-4 text-cyan-700">
        <button onClick={()=>onselectedcategory(null)} className={`lg:ml-12 ${activeCateogry ?"":"active-button"}`} >All</button>


        {categories.map((Item) => (
  <button
    onClick={() => onselectedcategory(Item)}
    className={`mr-2 space-x-16 ${activeCateogry === Item ? "active-button" : ""}`}
    key={Item} // Move the key here
  >
    {Item}
  </button>
))}
    </div>
  )
}

export default Category