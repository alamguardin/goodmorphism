import './App.css'
import PreviewCard from './components/PreviewCard'
import Sidebar from './components/Sidebar'
import CodeBlock from './components/CodeBlock'
import { useState } from 'react'

function App() {
	const [	properties, setProperties] = useState({
		background: '#212A3E',
		blur: 16,
		opacity: 15,
		saturation: 120

	})

	const addProperties = (newProperties) => {
		setProperties(newProperties)
	}

	return (
		<main>
			<Sidebar properties={properties} addProperties={addProperties}/>
			<PreviewCard properties={properties}/>
			<CodeBlock properties={properties}/>
		</main>
	)
}

export default App
