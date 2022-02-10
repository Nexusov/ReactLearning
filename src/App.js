import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import { BrowserRouter, Route,} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainter';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import LoginPage  from './Components/Login/Login';

function App(props) {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Route path="/Login" render={() => <LoginPage />} />
					<Route path="/Dialogs" render={() => <DialogsContainer />} />
					<Route path="/Profile/:userId?" render={() => <ProfileContainer />} />
					<Route path="/Users" render={() => <UsersContainer />} />
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


	/* раньше было вот так:
<Route path='/Dialogs' component={Dialogs}/>
<Route path='/Profile' component={Profile}/>
<Route path='/News' component={News}/>
<Route path='/Music' component={Music}/>
<Route path='/Settings' component={Settings}/> 

а еще можно просто обернуть компоненту в Rout: <Route path='/'> <Componet /> </Route>

*/

