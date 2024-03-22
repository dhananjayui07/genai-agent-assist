import React, { useEffect, useState } from 'react';
import { SALES_BOT_FAQS_API_URL } from '../apiUrls';
import { getAccessToken } from '../token-service';

interface ApiResponse {
	instruction?: string;
	'dialog script': string[];
}

const ScriptTabContent: React.FC = () => {
	const [accessToken, setAccessToken] = useState('');
	const [dataHistory, setDataHistory] = useState<ApiResponse[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			let data = {
				step_name: 'Address Search',
				address_type: '',
				customer_name: '',
				date: '',
				selected_internet_plan: '',
				selected_phone_plan: '',
				selected_billing_choice: '',
				verification_mode: '',
				service_network_type: '',
				max_speed: '',
				last_screen_flag: '',
			};

			try {
				const accessToken = await getAccessToken();
				const response = await fetch(SALES_BOT_FAQS_API_URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
					},
					body: JSON.stringify(data),
				});

				const responseData = await response.json();
				console.log('Sales bot response data from service:', responseData);
				setDataHistory([responseData]);
			} catch (error) {
				console.log('Error calling API:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [accessToken]);
	console.log('Sales bot response data history:', dataHistory);

	return (
		<>
			<div>
				<h3 className="mb-2 text-lg leading-6 text-black  font-semibold capitalize">Step 1: Available Plans</h3>
				<div>
					{/* response instructions */}
					<div className="mb-4">
						<div className="text-black m-0 text-xs leading-4">
							Select the right plan for the customer’s needs. For customers only qualifying for DSL/Copper, only the
							best speed available is displayed.
						</div>
					</div>
					{/* Response Dialogues */}
					<div className="flex flex-col gap-2">
						<div className="text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]">
							<p className="m-0 leading-[18px] font-semibold">“What address are you seeking service for?”</p>
						</div>
						<div className="text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]">
							<p className="m-0 leading-[18px] font-semibold">“What address are you seeking service for?”</p>
						</div>
						<div className="text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]">
							<p className="m-0 leading-[18px] font-semibold">“What address are you seeking service for?”</p>
						</div>
						<div className="text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]">
							<p className="m-0 leading-[18px] font-semibold">
								“Do you currently reside at this address, or are you moving to this address?”
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ScriptTabContent;
