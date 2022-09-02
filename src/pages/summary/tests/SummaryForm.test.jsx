import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

describe('SummaryForm', () => {
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
		userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		expect(button).toBeEnabled();
	});

	test('unchecking checkbox again disables button', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox', {
			name: /terms and conditions/i,
		});
		const button = screen.getByRole('button', { name: 'Confirm order' });
		userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		expect(button).toBeEnabled();
		userEvent.click(checkbox);
		expect(checkbox).not.toBeChecked();
		expect(button).toBeDisabled();
	});

	test('popover responds to hover', async () => {
		render(<SummaryForm />);
		// popover starts out hidden
		const nullPopover = screen.queryByText(
			/no ice cream will actually be delivered/i
		);
		expect(nullPopover).not.toBeInTheDocument();

		// popover appears upon mouseover of checkbox label
		const termsAndConditions = screen.getByText(/terms and conditions/i);
		userEvent.hover(termsAndConditions);

		const popover = screen.getByText(
			/no ice cream will actually be delivered/i
		);
		expect(popover).toBeInTheDocument();

		// popover disappears when we mouse out
		userEvent.unhover(termsAndConditions);
		await waitForElementToBeRemoved(() =>
			screen.queryByText(/no ice cream will actually be delivered/i)
		);
	});
});
