import { useState, useEffect } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./App.css";

let data = JSON.parse(localStorage.getItem("data"));

const incomesExpenses = data || [];

const categoriesExpensesSelect = [
  "Їжа",
  "Комуналка",
  "Одяг",
  "Транспорт",
  "Кіно",
];
const categoriesIncomesSelect = ["Зарплата", "Продажі", "Депозити"];

const filterItems = {
  category: null,
  date: null,
  customDate: {},
  description: null,
};

function App() {
  <h1>{categoriesIncomesSelect[0]}</h1>
}

export default App;