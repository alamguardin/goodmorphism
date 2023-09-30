import './App.css'
import Sidebar from './components/Sidebar'

function App() {
	return (
		<main>
			<Sidebar/>			
			<div className='preview'></div>			
			<div className='code'></div>			
		</main>
	)
}

export default App
