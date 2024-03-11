export interface Balance {
    id: number;
    wallet: string;
    balance: number;
    currancy: string;
}

export const balances: Balance[] = [
    { id: 1, wallet: "Рабочий", balance: 116, currancy: "USD"},
    { id: 2, wallet: "Семейный", balance: 10000, currancy: "EUR"},
    { id: 3, wallet: "Кошачий", balance: 782, currancy: "RUB"},
    { id: 4, wallet: "Инвестиционный", balance: 39242, currancy: "GEL"},
    { id: 5, wallet: "Брокер", balance: 540984, currancy: "USD"},
];