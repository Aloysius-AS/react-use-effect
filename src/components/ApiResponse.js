import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Datapoint from './Datapoint';
import Filter from './Filter';

const API_KEY = '444a98f7-d29e-4a77-9757-d45b989e4f21';
const API_URL = 'https://dev.dashstat.com:8443/v1/datapoint';

const ApiResponse = ({ dataToGet }) => {
	const [apiResponse, setApiResponse] = useState([]);

	useEffect(() => {
		async function loadData() {
			let headers = {
				api_key: API_KEY,
			};

			axios
				.post(API_URL, dataToGet, { headers })
				.then((response) => {
					setApiResponse(response.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}

		loadData();
	}, [dataToGet]);

	if (apiResponse.data) {
		return (
			<div>
				<h2>Filter Applied</h2>
				{apiResponse.filter_applied.map((filter, i) => (
					<Filter
						key={i}
						column={filter.column}
						operator={filter.operator}
						value={filter.value}
					/>
				))}
				<br></br>

				<h2>Data Retrieved</h2>
				{apiResponse.data.map((datapoint) => (
					<React.Fragment key={datapoint.shopid}>
						<Datapoint
							shopId={datapoint.shopid}
							age_re={datapoint.age_re}
							bmi_re={datapoint.bmi_re}
							race_re={datapoint.race_re}
							sex_re={datapoint.sex_re}
						/>
						<br></br>
					</React.Fragment>
				))}
			</div>
		);
	} else {
		return null;
	}
};

export default ApiResponse;
