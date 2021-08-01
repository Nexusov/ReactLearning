import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import { BrowserRouter, BrowserRouter as Router, Route,} from 'react-router-dom';
import { addPost } from './Redux/State';

function App(props) {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Route
						path="/Dialogs"
						render = { () =>  
							<Dialogs state = {props.state.dialogsPage} /> } />
					<Route
						path="/Profile"
						render = { () => 
							<Profile 
								profilePage = {props.state.profilePage} 
								dispatch = {props.dispatch} /> } />
					<Route path="/News" render={() => <News />} />
					<Route path="/Music" render={() => <Music />} />
					<Route path="/Settings" render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

/* роуты:
1) import {BrowserRouter as Router, Route} from 'react-router-dom';
2) всё заключаем в тег Router или BrowserRouter
3) отдельные пути через Route <Route path="/dialogs" component={Dialoges} /> 
4) <Route exact path='/Dialogs' component={Dialogs}/> выведет только диалоги и все. Exact ищет точное совпадение url*/

{
	/* раньше было вот так:
<Route path='/Dialogs' component={Dialogs}/>
<Route path='/Profile' component={Profile}/>
<Route path='/News' component={News}/>
<Route path='/Music' component={Music}/>
<Route path='/Settings' component={Settings}/> 

а еще можно просто обернуть компоненту в Rout: <Route path='/'> <Componet /> </Route>

*/
}
