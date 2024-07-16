"use client";
import React from "react";
import { useEffect, useState } from "react";
import Node from "./Node";
import { Button } from "./ui/button";

export default function Array() {
	const [array, setArray] = useState<any[]>([]);

	React.useEffect(() => {
		const temp = [];
		for (let i = 0; i <= 5; i++) {
			temp.push(<Node index={i} />);
		}
		setArray(temp);
	}, []);

	const handleArrayPush = () => {
		setArray([
			...array,
			<Node index={array.length} className="animate-in slide-in-from-right" />,
		]);
	};

	const handleArrayDeleteLastElement = () => {
		const currentArray = [...array];
		currentArray[array.length - 1] = (
			<Node index={array.length - 1} className="animate-out fade-out" />
		);
		setArray(currentArray);
		setTimeout(() => setArray(array.slice(0, -1)), 200);
	};

	const handleInsertAtIndex = (insert_index: number) => {};

	return (
		<>
			<div>
				<div className="flex items-center justify-center bg-black">{array}</div>
				<Button onClick={handleArrayPush}>Add to the end</Button>
				<Button onClick={handleArrayDeleteLastElement}>
					Remove from the end
				</Button>
			</div>
		</>
	);
}
