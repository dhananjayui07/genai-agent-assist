import axios from 'axios';
import React, { useState } from 'react';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const StaticSalesold: React.FC = () => {
	const getAccessToken = async () => {
		console.log('in access token function');
		let oauthKey = process.env.REACT_APP_OAUTH_KEY;
		let oauthSecret = process.env.REACT_APP_OAUTH_SECRET;
		console.log(oauthKey, oauthSecret);
		const oauthCredentials = btoa(`${oauthKey}:${oauthSecret}`);
		let data = '';

		let config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'https://api-dv.brightspeed.com/genai/oauth/client_credential/accesstoken?grant_type=client_credentials',
			headers: {
				Authorization: `Basic ${oauthCredentials}`,
			},
			data: data,
		};

		try {
			console.log('before axios request start');
			const response = await axios.request(config);
			console.log('after axios request');
			const { issued_at, expires_in } = response.data;

			localStorage.setItem('issued_at', issued_at);
			localStorage.setItem('expires_in', expires_in);
			console.log('access_token: ', response.data);
			return response.data.access_token;
		} catch (error) {
			console.log(error);
		}
	};

	const handleAccessToken = async () => {
		console.log('getting access tokens here');
		const accessToken = await getAccessToken();
		if (accessToken) {
			console.log('Access Token from response: ', accessToken);
		}
	};

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
					<button type="button" onClick={handleAccessToken}>
						Miracle!
					</button>
				</div>
			</div>
		</>
	);
};
export default StaticSalesold;
