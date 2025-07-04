interface Question {
	id: number;
	text: string;
	visitors: number;
}

interface Answer {
	id: number;
	text: string;
	question_id: number;
}
