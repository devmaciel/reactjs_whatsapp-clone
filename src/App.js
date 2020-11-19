import "./App.css";
import Chat from "./Components/Chat/Chat";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
	return (
		// BEM naming convention
		<div className='app'>
			<div className='app__body'>
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
}

export default App;
