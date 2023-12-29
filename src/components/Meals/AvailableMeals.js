import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: "Finest Chicken and Mutton",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Idly",
    description: "A South-Indian specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Dosa",
    description: "Crispy Mouth watering",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Grill- Chicken",
    description: "A protein rich diet",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
