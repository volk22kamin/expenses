import "./App.css";
import ExpanseList from "./components/ExpenseList/ExpanseList";
import NewExpense from "./components/newExpense/NewExpense";
// import ExpenseFilter from "./components/ExpeneseFilter/ExpenseFilter";

function App() {
  return (
    <div className="app">
      <div className="card">
        <NewExpense />
        <ExpanseList />
      </div>
    </div>
  );
}

export default App;
