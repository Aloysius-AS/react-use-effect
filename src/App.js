import React, { useState } from 'react';
import './App.css';
import ApiResponse from './components/ApiResponse';

function App() {
	const reqBody1 = {
		schema_name: 'mock',
		base_table_name: 'heart_failure',
		columns: ['shopid', 'age_re', 'sex_re', 'race_re', 'bmi_re'],
		filter: [
			{
				column: 'age_re',
				operator: '>=',
				value: 60,
			},
			{
				column: 'race_re',
				operator: '=',
				value: 'Chinese',
			},
		],
	};

	const reqBody2 = {
		schema_name: 'mock',
		base_table_name: 'heart_failure',
		columns: ['shopid', 'age_re', 'sex_re', 'race_re', 'bmi_re'],
		filter: [
			{
				column: 'age_re',
				operator: '>=',
				value: 60,
			},
			{
				column: 'race_re',
				operator: '!=',
				value: 'Chinese',
			},
		],
	};

	const [dataToGet, setDataToGet] = useState(reqBody1);

	function getData(reqBody) {
		setDataToGet(reqBody);
	}

	return (
		<div>
			<button onClick={() => getData(reqBody1)}>Datapoint Query 1</button>
			<button onClick={() => getData(reqBody2)}>Datapoint Query 2</button>
			<ApiResponse dataToGet={dataToGet} />
		</div>
	);
}

export default App;
