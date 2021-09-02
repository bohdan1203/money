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
  const input = document.getElementById("input");

  const [modal, setModal] = useState(false);
  const [operationType, setOperationType] = useState(null);
  const [sum, setSum] = useState("");
  const [selectType, setSelectType] = useState(null);
  const [category, setCategory] = useState("Виберіть категорію");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [description, setDescription] = useState("");
  const [history, setHistory] = useState(data);
  const [nevermind, setNevermind] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [areYouSure, setAreYouSure] = useState(false);
  const [modalEditCategories, setModalEditCategories] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(incomesExpenses));
  });

  function currentBalance() {
    let balance = 0;
    for (let i = 0; i < incomesExpenses.length; i++) {
      balance += incomesExpenses[i].sum;
    }
    return Math.round(balance * 100) / 100;
  }

  return (
    <div>
      <h1>{ooo}</h1>
      <h2>{categoriesIncomesSelect[0]}</h2>
      <h1>Ваш баланс: {currentBalance()} грн.</h1>
    </div>
  )
}

export default App;