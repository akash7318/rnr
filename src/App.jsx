import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/mobile/Home'
import Platform from 'react-platform-js'
import Layout from './pages/mobile/Layout'

export default function App() {
	return (
		<BrowserRouter>
			{
				(Platform.OS === 'Android') || (Platform.OS === 'iOS')
				// ((Platform.OS === 'Android') || (Platform.OS === 'iOS') && (Platform.DeviceType === 'mobile'))
				?
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/date' element="Date" />
					</Route>
				</Routes>
				:
				<Routes>
					<Route path='/' element="Kindly Open in Android or IOS Phone Only." />
				</Routes>
			}
		</BrowserRouter>
	)
}
