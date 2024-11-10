document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payrollForm');
    const paySummary = document.getElementById('paySummary');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculatePay();
    });

    function calculatePay() {
        const employeeName = document.getElementById('employeeName').value;
        const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
        const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
        const overtimeRate = parseFloat(document.getElementById('overtimeRate').value);
        const taxRate = parseFloat(document.getElementById('taxRate').value) / 100;

        const regularHours = Math.min(hoursWorked, 40);
        const overtimeHours = Math.max(hoursWorked - 40, 0);

        const regularPay = regularHours * hourlyRate;
        const overtimePay = overtimeHours * hourlyRate * overtimeRate;
        const grossPay = regularPay + overtimePay;

        const taxDeduction = grossPay * taxRate;
        const netPay = grossPay - taxDeduction;

        displayPaySummary({
            name: employeeName,
            regularHours,
            overtimeHours,
            regularPay,
            overtimePay,
            grossPay,
            taxDeduction,
            netPay
        });
    }

    function displayPaySummary(pay) {
        document.getElementById('summaryName').textContent = pay.name;
        document.getElementById('summaryRegularHours').textContent = pay.regularHours.toFixed(2);
        document.getElementById('summaryOvertimeHours').textContent = pay.overtimeHours.toFixed(2);
        document.getElementById('summaryRegularPay').textContent = pay.regularPay.toFixed(2);
        document.getElementById('summaryOvertimePay').textContent = pay.overtimePay.toFixed(2);
        document.getElementById('summaryGrossPay').textContent = pay.grossPay.toFixed(2);
        document.getElementById('summaryTaxDeduction').textContent = pay.taxDeduction.toFixed(2);
        document.getElementById('summaryNetPay').textContent = pay.netPay.toFixed(2);

        paySummary.classList.remove('hidden');
    }
});
