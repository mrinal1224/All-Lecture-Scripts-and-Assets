### Problem Statement: Currency Converter Hook

Create a custom React hook called `useCurrencyConverter` that converts an amount from one currency to another using static exchange rates. This hook will facilitate currency conversions within components where such functionality is required.

#### Requirements:

1. The hook should accept two parameters:
   - `baseCurrency`: The currency from which the conversion should start.
   - `targetCurrency`: The currency to which the amount will be converted.
2. The hook should return a function:
   - `convert(amount)`: Takes a numerical value (the amount in `baseCurrency`) and returns the converted amount in `targetCurrency`.
3. Use the following predefined exchange rates for conversion:
   - USD to EUR: 0.93
   - EUR to USD: 1.07
   - GBP to USD: 1.21
4. If an unsupported currency pair is used or if the input amount is not a number, the `convert` function should return `null`.

#### Code Stub

```jsx
import { useCallback } from 'react';

function useCurrencyConverter(baseCurrency, targetCurrency) {
    const convert = useCallback((amount) => {
        // Conversion logic will be placed here.
    }, [baseCurrency, targetCurrency]);

    return convert;
}

export default useCurrencyConverter;
```

#### Simplified Solution

For a straightforward approach, we can use a series of `if` statements to determine the conversion based on the currency pair:

```jsx
import { useCallback } from 'react';

function useCurrencyConverter(baseCurrency, targetCurrency) {
    const convert = useCallback((amount) => {
        if (isNaN(amount)) {
            return null; // Return null if the amount is not a number
        }

        if (baseCurrency === 'USD' && targetCurrency === 'EUR') {
            return amount * 0.93;
        } else if (baseCurrency === 'EUR' && targetCurrency === 'USD') {
            return amount * 1.07;
        } else if (baseCurrency === 'GBP' && targetCurrency === 'USD') {
            return amount * 1.21;
        } else {
            return null; // Return null for unsupported currency pairs
        }
    }, [baseCurrency, targetCurrency]);

    return convert;
}

export default useCurrencyConverter;
```

#### Test Cases

1. **Test Case 1**: Convert 100 USD to EUR.
   - Expected Output: 93 (since the rate from USD to EUR is 0.93)
2. **Test Case 2**: Convert 50 EUR to USD.
   - Expected Output: 53.5 (since the rate from EUR to USD is 1.07)
3. **Test Case 3**: Convert 10 GBP to USD.
   - Expected Output: 12.1 (since the rate from GBP to USD is 1.21)
4. **Test Case 4**: Convert 30 USD to GBP (unsupported currency pair).
   - Expected Output: null

.