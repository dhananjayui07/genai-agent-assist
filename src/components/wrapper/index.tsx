import React from 'react';

interface WrapperProps {
	text: string;
}

const Wrapper: React.FC<WrapperProps> = ({ text }) => {
	return	<div className="text-sky-500">{text}</div>;
};

export default Wrapper;
