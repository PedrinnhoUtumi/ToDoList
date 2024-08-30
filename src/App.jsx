import { Header } from "./components/Header/Header.jsx"
import { Main } from "./components/Main/Main.jsx"
import { TaskList } from "./components/TaskList/TaskList.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
 
import styles from "./App.module.css"

export function App() {
  return (
    <div className = {styles.App}>
    <Header/>
    <Main>
      <form action="">
        <input type="text"/>
        <button>+</button>
      </form>
      <TaskList/>
    </Main>
    <Footer autor = "Pedro" ano = "2024"/>
    </div>
  )
}

 