import React, { useState } from 'react';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const StaticSales: React.FC = () => {
	const insightsTabs = [
		{
			id: 'tab1',
			label: 'Assist',
			content: <div>Assist</div>,
		},
		{ id: 'tab2', label: 'Transcript', content: <div>Coming Soon..</div> },
		{ id: 'tab3', label: 'Feedback', content: <div>Coming Soon..</div> },
	];
	const [activeTab, setActiveTab] = useState(insightsTabs[0].id);
	return (
		<>
			<div className="w-80">
				<div className="p-4 bg-[#97eeff] rounded-t-xl">
					<div className="rounded-lg bg-[#7edff2] flex justify-between items-start mb-4">
						{insightsTabs.map((tab) => (
							<button
								type="button"
								key={tab.id}
								className={classNames(
									activeTab === tab.id ? 'bg-[#1f1f1f] text-white' : 'bg-transparent text-[#1f1f1f]',
									'h-8 rounded-lg px-2 text-sm font-medium flex-1'
								)}
								onClick={() => setActiveTab(tab.id)}
							>
								{tab.label}
							</button>
						))}
					</div>
					<div className="">
						{insightsTabs.map((tab) => (
							<div key={tab.id} className={activeTab === tab.id ? '' : 'hidden'}>
								{tab.content}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default StaticSales;
