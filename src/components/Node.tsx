import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

export type NodeProps = {
	index?: number;
	className?: string;
};

export default function Node({ index, className }: NodeProps) {
	return (
		<div
			className={cn(
				"w-[100px] h-[100px] bg-black text-white text-2xl border-white border-4 m-2 rounded-lg hover:bg-white hover:text-black",
				className,
			)}
		>
			<div className="flex justify-center items-center h-full">
				<p>{index}</p>
			</div>
		</div>
	);
}
