import './App.css'
import PreviewCard from './components/PreviewCard'
import Sidebar from './components/Sidebar'

function App() {
	return (
		<main>
			<Sidebar />			
			<PreviewCard />			
			<div className='code'></div>			
		</main>
	)
}

export default App
