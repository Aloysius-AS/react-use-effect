import React from 'react';

const Datapoint = ({ shopId, age_re, sex_re, race_re, bmi_re }) => {
	return (
		<table>
			<tbody>
				<tr>
					<td style={{ width: '100px' }}>ID</td>
					<td>{shopId}</td>
				</tr>
				<tr>
					<td>Age</td>
					<td>{age_re}</td>
				</tr>
				<tr>
					<td>Gender</td>
					<td>{sex_re}</td>
				</tr>
				<tr>
					<td>Race</td>
					<td>{race_re}</td>
				</tr>
				<tr>
					<td>BMI</td>
					<td>{bmi_re}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Datapoint;
