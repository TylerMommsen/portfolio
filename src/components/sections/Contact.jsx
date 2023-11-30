import { useState } from 'react';

const Contact = () => {
	const [contactFormData, setContactFormData] = useState({
		email: '',
		subject: '',
		body: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		const { email, subject, body } = contactFormData;

		console.log(email, subject, body);
	};

	const handleInputChange = (e) => {
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
