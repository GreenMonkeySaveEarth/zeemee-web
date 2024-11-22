interface Drink {
  name: string;
  category: string;
  container: string;
  instructions: string;
  image: string;
  ingredients: Ingredient[];
}

interface Ingredient {
  name: string;
  measurement: string;
}


export type { Drink, Ingredient };