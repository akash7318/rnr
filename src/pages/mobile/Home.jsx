import { Link } from "react-router-dom"

function Home() {
	return (
		<div className="w-full">
			<img src="./rnr_logo.png" alt="Rent & Ride" title="Rent & Ride" className='m-auto mt-3' />
			<div className="w-full h-10 border border-gray-500 rounded-full my-6 flex items-center">
				<img src="./icons/search.png" alt="Search" className="h-5 px-4" />
				<input type="text" placeholder="Search anything" className="w-full outline-none rounded-full h-full px-1" />
			</div>
			<div className="flex flex-wrap items-center justify-between gap-2">
				<div className="w-44 bg-[#FF0D0026] rounded-2xl p-3">
					<p className="text-[#FF0D00] font-bold">Fleet status</p>
					<div className="flex items-center justify-between my-3">
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Booked</p>
							<p className="text-sm">24</p>
						</div>
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Available</p>
							<p className="text-sm text-right">06</p>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Refuel</p>
							<p className="text-sm">06</p>
						</div>
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Repair</p>
							<p className="text-sm text-right">00</p>
						</div>
					</div>
				</div>
				<div className="w-44 bg-[#FF6E0126] rounded-2xl p-3">
					<p className="text-[#FF6E01] font-bold">Earnings</p>
					<div className="flex items-center justify-between my-3">
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Today</p>
							<p className="text-sm">06</p>
						</div>
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Expenses</p>
							<p className="text-sm text-right">24</p>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Profit</p>
							<p className="text-sm">24</p>
						</div>
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">This month</p>
							<p className="text-sm text-right">06</p>
						</div>
					</div>
				</div>
				<div className="w-44 bg-[#0000001A] rounded-2xl p-3">
					<p className="text-[#000000CC] font-bold">Alerts</p>
					<div className="flex items-center justify-between my-3 invisible">
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Today</p>
							<p className="text-sm">06</p>
						</div>
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Expenses</p>
							<p className="text-sm text-right">24</p>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Tasks</p>
							<p className="text-sm">04</p>
						</div>
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Messages</p>
							<p className="text-sm text-right">06</p>
						</div>
					</div>
				</div>
				<div className="w-44 bg-white border border-black rounded-2xl p-3">
					<div className="flex items-center justify-between">
						<p className="text-[#000000CC] font-bold">Dashboard</p>
						<img src="./icons/right-vector.png" alt="Right Vector" />
					</div>
					<div className="flex items-center justify-between my-3 invisible">
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Today</p>
							<p className="text-sm">06</p>
						</div>
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Expenses</p>
							<p className="text-sm text-right">24</p>
						</div>
					</div>
					<div className="flex items-center justify-between invisible">
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Tasks</p>
							<p className="text-sm">04</p>
						</div>
						<div>
							<p className="text-sm font-semibold text-[#000000CC]">Messages</p>
							<p className="text-sm text-right">06</p>
						</div>
					</div>
				</div>
			</div>
			<Link className="w-full h-16 bg-[#FF6E01] rounded-2xl mt-6 px-5 flex items-center justify-between">
				<p className="text-white text-base fontSuperRetroItalic">RECEIVE</p>
				<p className="text-white"><span className="font-semibold mr-1">15</span>incoming</p>
			</Link>
			<Link className="w-full h-16 bg-[#FF0D00] rounded-2xl mt-6 px-5 flex items-center justify-between">
				<p className="text-white text-base fontSuperRetroItalic">HANDOVER</p>
				<p className="text-white"><span className="font-semibold mr-1">10</span>outgoing</p>
			</Link>
			<Link to={'/createRide'} className="w-full h-16 bg-black rounded-2xl mt-6 px-5 flex items-center justify-between">
				<p className="text-white text-base fontSuperRetroItalic">CREATE RIDE</p>
				<p className="text-white"><span className="font-semibold mr-1">05</span>available</p>
			</Link>
		</div>
	)
}

export default Home