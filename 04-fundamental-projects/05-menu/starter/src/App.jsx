import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
/*
const tempCategories = menu.map((item)=> item.category)
const tempSet = new Set(tempCategories);
const tempItems = ["all", ...tempSet]
*/
//one liner of the same thing
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
let me = ["hosein","moustafa"];
let you = {name:"hosein obj",
           after:"hello"};

const App = () => {
  const [menuItems,setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories)
 const filterItems =(category)=> {
  console.log(category);
  if(category === "all"){
    setMenuItems(menu);
   
  }else {
    const newItems = menu.filter((item)=> item.category === category)
    setMenuItems(newItems)

  }


  
 }

  return <main>
    
    <section className="menu">
      <Title text="Our menu"/>
      <Categories categories = {categories} filterItems={filterItems} />
      <Menu items={menuItems}/>
    </section>
  </main>;
};
export default App;
