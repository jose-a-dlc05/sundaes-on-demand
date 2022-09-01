import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('Checkbox', () => {
	const checkbox = screen.getByRole('checkbox', {
		name: 'I agree to Terms and Conditions',
	});
	const button = screen.getByRole('button', { name: 'Confirm order' });
	test('checkbox is unchecked by default', () => {
		render(<SummaryForm />);
		expect(checkbox).not.toBeChecked();
	});

	test('checking checkbox enables button', () => {
		fireEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		expect(button).toBeEnabled();
	});

	test('unchecking checkbox again disables button', () => {
		fireEvent.click(button);
		expect(checkbox).not.toBeChecked();
		expect(button).toBeEnabled();
	});
});
