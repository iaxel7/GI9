// Define Budget class to handle income, expenses, and budget calculation
class Budget {
    constructor() {
        // Initializes arrays to store income and expenses
        this.income = [];
        this.expenses = [];
    }

    // Method to add income

    addIncome(description, amount) {
        // Check if description is provided and amount is positive
        if (description && amount > 0) {
            // Add income to the income array
            this.income.push({ description, amount });
            return true; // Return true for successful addition
        } else {
            return false; // Return false if description or amount is invalid
        }
    }

    // Method to add expense
    addExpense(description, amount) {
        // Check if description is provided and amount is positive
        if (description && amount > 0) {
            // Add expense to the expenses array
            this.expenses.push({ description, amount });
            return true; // Return true for successful addition
        } else {
            return false; // Return false if description or amount is invalid
        }
    }

    // Method to calculate total income
    calculateTotalIncome() {
        // Sum up all income amounts
        return this.income.reduce((total, item) => total + item.amount, 0);
    }

    // Method to calculate total expenses
    calculateTotalExpenses() {
        // Sum up all expense amounts
        return this.expenses.reduce((total, item) => total + item.amount, 0);
    }

    // Method to calculate total budget
    calculateTotalBudget() {
        // Subtract total expenses from total income
        return this.calculateTotalIncome() - this.calculateTotalExpenses();
    }
}
// End of Object Class

// Initialize Budget object
const budget = new Budget();

// Function to update summary on the UI
function updateSummary() {
    // Calculate total income, expenses, and budget
    const totalIncome = budget.calculateTotalIncome();
    const totalExpenses = budget.calculateTotalExpenses();
    const totalBudget = budget.calculateTotalBudget();

    // connect to HTML
    document.getElementById('total-income').textContent = `$${totalIncome}`;
    document.getElementById('total-expenses').textContent = `$${totalExpenses}`;
    document.getElementById('total-budget').textContent = `$${totalBudget}`;
}

// Event listener for adding income

document.getElementById('add-income').addEventListener('click', function() {
    // Get description and amount input values
    const description = document.getElementById('income-description').value.trim();
    const amount = parseFloat(document.getElementById('income-amount').value.trim());

    // Add income if inputs are valid, else show alert
    if (budget.addIncome(description, amount)) {
        updateSummary(); // Update summary on the UI
        // Clear input fields
        document.getElementById('income-description').value = '';
        document.getElementById('income-amount').value = '';
    } else {
        alert('Please enter a valid description and amount for income.');
    }
});

// Event listener for adding expenses

document.getElementById('add-expense').addEventListener('click', function() {
    // Get description and amount input values
    const description = document.getElementById('expense-description').value.trim();
    const amount = parseFloat(document.getElementById('expense-amount').value.trim());

    // Add expense if inputs are valid, else show alert
    if (budget.addExpense(description, amount)) {
        updateSummary(); // Update summary on the UI

        
        // Clear input fields
        document.getElementById('expense-description').value = '';
        document.getElementById('expense-amount').value = '';
    } else {
        alert('Please enter a valid description and amount for expenses.');
    }
});
