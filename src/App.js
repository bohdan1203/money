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
const ooo = "LOREM"

const filterItems = {
  category: null,
  date: null,
  customDate: {},
  description: null,
};

function App() {
  return (
    <div>
      <h1>{ooo}</h1>
      <h2>{categoriesIncomesSelect[0]}</h2>
    </div>
  )
}

export default App;