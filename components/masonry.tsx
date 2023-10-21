import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const Grid = styled.div`
  column-count: 3;
  column-gap: 1rem;
	column-fill: balance;
  width: 100%;
	margin-bottom: 10rem;

	@media (max-width: 80rem) {
			column-count: 2;
	}

	@media (max-width: 60rem) {
			column-count: 1;
	}

	> div {
		break-inside: avoid; 
	}
`;

export const Masonry = ({ children }: { children: React.ReactNode[] }) => {
	const [numColumns, setNumColumns] = useState(3);

	console.log(numColumns);

	useEffect(() => {
		const updateColumns = () => {
			const width = window.innerWidth / 16; // Convert to rem
			if (width <= 60) setNumColumns(1);
			else if (width <= 80) setNumColumns(2);
			else setNumColumns(3);
		};

		updateColumns();
		window.addEventListener("resize", updateColumns);
		return () => window.removeEventListener("resize", updateColumns);
	}, []);

	const childArray = React.Children.toArray(children);
	const columns = Array.from({ length: numColumns }, () => []);

	for (const [index, child] of childArray.entries()) {
		const col = index % numColumns;
		columns[col].push(child);
	}

	console.log(columns);

	return (
		<Grid>
			{columns.map((column, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: This is fine
				<div key={index}>
					{column.map((child, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: This is fine
						<div key={index}>{child}</div>
					))}
				</div>
			))}
		</Grid>
	);
};
