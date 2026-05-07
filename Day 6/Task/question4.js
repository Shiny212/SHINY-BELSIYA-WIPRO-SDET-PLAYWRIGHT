const employees = [
    { id: 101, name: "Alice", salary: 6000 },
    { id: 102, name: "Bob", salary: 3500 },
    { id: 103, name: "Charlie", salary: 5200 }
];

function taxLogic(salary) {
    if (salary > 5000) {
        return salary * 20 / 100;
    } else {
        return salary * 10 / 100;
    }
}

function calculatePayroll(employees, taxCallback) {
    let totalNetPayout = 0;

    let processedEmployees = employees.map(employee => {
        let tax = taxCallback(employee.salary);

        let netSalary = employee.salary - tax;

        totalNetPayout += netSalary;

        let status;

        if (netSalary > 4000) {
            status = "Premium";
        } else {
            status = "Standard";
        }

        return {
            id: employee.id,
            name: employee.name,
            salary: employee.salary,
            netSalary: netSalary,
            status: status
        };
    });

    console.log(`Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employees.length} employees.`);

    setTimeout(() => {
        console.log(processedEmployees);
    }, 2000);
}

calculatePayroll(employees, taxLogic);