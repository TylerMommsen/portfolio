import { ChangeEvent, FormEvent, useState } from 'react';

interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

const Contact: React.FC = () => {
	const [contactFormData, setContactFormData] = useState<ContactFormData>({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const { name, email, message } = contactFormData;

		console.log(name, email, message);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target;

		setContactFormData({ ...contactFormData, [id]: value });
	};

	return (
		<>
			<div className="contact">
				<h2 className="section-title">Contact</h2>
				<div className="socials">
					<img src="github-icon.svg" id="github"></img>
					<img src="linkedin-icon.svg" id="linkedin"></img>
				</div>

				<p>Or email me directly:</p>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						id="name"
						value={contactFormData.name}
						onChange={handleInputChange}
						placeholder="Name"
						required
					></input>
					<input
						type="email"
						id="email"
						value={contactFormData.email}
						onChange={handleInputChange}
						placeholder="Email"
						required
					></input>
					<textarea
						id="message"
						value={contactFormData.message}
						onChange={handleInputChange}
						placeholder="Message"
						rows={6}
						style={{ resize: 'none' }}
						required
					></textarea>
					<button type="submit" id="submit-btn">
						Send
					</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
