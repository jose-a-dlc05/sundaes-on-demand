import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('Checkbox', () => {
	test('checkbox is unchecked by default', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox', {
			name: /terms and conditions/i,
		});
		expect(checkbox).not.toBeChecked();
	});

	test('checking checkbox enables button', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox', {
			name: /terms and conditions/i,
		});
		const button = screen.getByRole('button', { name: 'Confirm order' });
		fireEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		expect(button).toBeEnabled();
	});

	test('unchecking checkbox again disables button', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox', {
			name: /terms and conditions/i,
		});
		const button = screen.getByRole('button', { name: 'Confirm order' });
		fireEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		expect(button).toBeEnabled();
		fireEvent.click(checkbox);
		expect(checkbox).not.toBeChecked();
		expect(button).toBeDisabled();
	});
});
