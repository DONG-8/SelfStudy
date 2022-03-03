import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";
import Circle from "./Circle";
import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [value,setValue] = useState("")
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: {value},
    } = e;
    setValue(value)
  }

  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello")
  }

  //ver3 : theme
  const Ciontainer = styled.div`
    background-color: ${props => props.theme.black};
  `
  const H1 = styled.h1`
    color : ${props => props.theme.white};
  `

  return (
    // ver 1 : tutorial ~ state
    // <div>
		// 	<Circle borderColor="yellow" bgColor="teal"/>
		// 	<Circle text="goood" bgColor="tomato"/>
		
    //ver2 : form
    // <form onSubmit={onSubmit}>
    //   <input value={value} onChange={onChange} type="text" placeholder="username"></input>
    //   <button>Log in</button>
    // </form>

    //ver3: theme
    <Ciontainer>
      <H1></H1>
    </Ciontainer>

    // 완성본
    // </div>
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
