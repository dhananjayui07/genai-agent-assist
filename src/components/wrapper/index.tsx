import { BeakerIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Insights from './insights';
import ScriptTabContent from './script-tab-content';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const StaticSales: React.FC = () => {
	const scriptTabs = [
		{
			id: 'tab1',
			label: 'Assist',
			content: <ScriptTabContent />,
		},
		{ id: 'tab2', label: 'Transcript', content: <div>Coming Soon.....</div> },
		{ id: 'tab3', label: 'Feedback', content: <div>Coming Soon..</div> },
	];
	const [activeTab, setActiveTab] = useState(scriptTabs[0].id);

	return (
		<>
			<div className="w-80">
				{/* Script Tabs */}
				<div className="p-4 pb-5 bg-[#97eeff] rounded-t-xl">
					<BeakerIcon className="h-6 w-6 text-blue-500" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
						/>
					</svg>

					<div className="rounded-lg bg-[#7edff2] flex justify-between items-start mb-4">
						{scriptTabs.map((tab) => (
							<button
								type="button"
								key={tab.id}
								className={classNames(
									activeTab === tab.id ? 'bg-[#1f1f1f] text-[#ffffff]' : 'bg-transparent text-[#1f1f1f]',
									'h-8 rounded-lg px-2 text-sm font-medium flex-1'
								)}
								onClick={() => setActiveTab(tab.id)}
							>
								{tab.label}
							</button>
						))}
					</div>
					<div className="">
						{scriptTabs.map((tab) => (
							<div key={tab.id} className={activeTab === tab.id ? '' : 'hidden'}>
								{tab.content}
							</div>
						))}
					</div>
				</div>
				{/* Insights */}
				<Insights />
			</div>
		</>
	);
};

export default StaticSales;
