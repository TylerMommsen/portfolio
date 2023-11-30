import { ChangeEvent, FormEvent, useState } from 'react';

interface ContactFormData {
	email: string;
	subject: string;
	body: string;
}

const Contact: React.FC = () => {
	const [contactFormData, setContactFormData] = useState<ContactFormData>({
		email: '',
		subject: '',
		body: '',
	});

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const { email, subject, body } = contactFormData;

		console.log(email, subject, body);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;

		setContactFormData({ ...contactFormData, [id]: value });
	};

	return (
		<>
			<div className="contact">
				<h2>Contact</h2>
				<p>Github:</p>
				<p>LinkedIn:</p>

				<p>Or email me directly:</p>
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						id="email"
						value={contactFormData.email}
						onChange={handleInputChange}
						placeholder="Email"
					></input>
					<input
						type="text"
						id="subject"
						value={contactFormData.subject}
						onChange={handleInputChange}
						placeholder="Subject"
					></input>
					<input
						type="text"
						id="body"
						value={contactFormData.body}
						onChange={handleInputChange}
						placeholder="Body"
					></input>
					<button type="submit">Send</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
