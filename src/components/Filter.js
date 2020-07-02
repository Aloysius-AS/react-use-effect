import React from 'react';

const Filter = ({ column, operator, value }) => {
	return (
		<div>
			<li>
				{column} {operator} {value}
			</li>
		</div>
	);
};

export default Filter;
