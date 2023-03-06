import React from 'react';
import Card from '../UI/Card';
import style from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function AvailableMeals() {
  const availableMealsList = DUMMY_MEALS.map(({
    id, name, description, price,
  }) => (
    <MealItem
      key={id}
      id={id}
      description={description}
      name={name}
      price={price}
    />
  ));

  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {availableMealsList}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;