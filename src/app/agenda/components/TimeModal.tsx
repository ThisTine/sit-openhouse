const TimeModal = ({ start, end }: { start: number; end: number }) => {
	const startHour = Math.floor(start / 100);
	const startMinute = start % 100 === 0 ? "00" : start % 100;
	const endHour = Math.floor(end / 100);
	const endMinute = end % 100 === 0 ? "00" : end % 100;
	return (
		<div className="absolute right-0 top-[50%] z-40 translate-x-[50%] translate-y-[-50%] rounded bg-white p-2">
			<h3>
				{startHour +
					":" +
					startMinute +
					" - " +
					endHour +
					":" +
					endMinute}
			</h3>
		</div>
	);
};

export default TimeModal;