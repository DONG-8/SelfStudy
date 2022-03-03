import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";
import Circle from "./Circle";

function App() {
  return (
    <div>
			<Circle borderColor="yellow" bgColor="teal"/>
			<Circle text="goood" bgColor="tomato"/>
		</div>
    // <Router>
    //   <Header />
    //   <Switch>
    //     <Route path="/tv">
    //       <Tv />
    //     </Route>
    //     <Route path="/search">
    //       <Search />
    //     </Route>
    //     <Route path={["/", "/movies/:movieId"]}>
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
