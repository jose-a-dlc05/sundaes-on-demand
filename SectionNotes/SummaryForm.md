### Review

- (review) testing flow where checkbox controls whether button is disabled
- mouseover for terms and conditions
  - **userEvent.hover** and **userEvent.unhover** methods
  - **queryByText** to and **expect().not.toBeInTheDocument()** for element starting out not on page
  - **async waitForElementToBeRemoved** for element that was there and then disappeared
- **test not wrapped in act(...)** warning
  - Determine how component is getting updated async and account for in tests
