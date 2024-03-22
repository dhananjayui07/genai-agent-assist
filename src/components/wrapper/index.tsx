import React, { useState } from 'react';
import Insights from './insights';
import ScriptTabContent from './script-tab-content';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const scriptTabs = [
	{
		id: 'tab1',
		label: 'Assist',
		content: <ScriptTabContent />,
	},
	{ id: 'tab2', label: 'Transcript', content: <div>Coming Soon.....</div> },
	{ id: 'tab3', label: 'Feedback', content: <div>Coming Soon..</div> },
];
const StaticSales: React.FC = () => {
	console.log('');
	const [activeTab, setActiveTab] = useState(scriptTabs[0].id);
	return (
		<>
			<div className="w-80">
				{/* Script Tabs */}
				<div className="p-4 pb-5 bg-[#97eeff] rounded-t-xl">
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
