export enum MainCategories {
  FAMILY = 'Family',
  FOOD = 'Food',
  TRANSPORTATION = 'Transportation',
  SHOPPING = 'Shopping',
  ENTERTAINMENT = 'Entertainment',
  HEALTH_FITNESS = 'Health & Fitness',
  BILLS = 'Bills & Utilities',
}

export enum FoodCategories {
  RESTAURANT = 'Restaurant',
  SHOP = 'Shop',
}

export enum BillsCategories {
  PHONE_BILL = 'Phone Bill',
  WATER_BILL = 'Water Bill',
  ELECTRICITY_BILL = 'Electricity Bill',
  GAS_BILL = 'Gas Bill',
  INTERNET_BILL = 'Internet Bill',
  RENTALS = 'Rentals',
}

export enum TransportationCategories {
  TAXI = 'Taxi',
  PARKING_FEES = 'Parking Fees',
  PETROL = 'Petrol',
}

export enum ShoppingCategories {
  CLOTHING = 'Clothing',
  FOOTWEAR = 'Footwear',
  ACCESSORIES = 'Accessories',
  ELECTRONICS = 'Electronics',
}

export enum EntertainmentCategories {
  MOVIES = 'Movies',
  GAMES = 'Games',
}

export enum HealthCategories {
  SPORTS = 'Sports',
  DOCTORS = 'Doctors',
  PHARMACY = 'Pharmacy',
  PERSONAL_CARE = 'Personal Care',
}

export type SubCategories =
  | FoodCategories
  | BillsCategories
  | TransportationCategories
  | ShoppingCategories
  | EntertainmentCategories
  | HealthCategories;
