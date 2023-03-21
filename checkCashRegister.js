function checkCashRegister(price, cash, cid) {
    const currencyValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let changeDue = cash - price;
    let totalCashInRegister = cid.reduce((acc, curr) => acc + curr[1], 0);

    if (changeDue > totalCashInRegister) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (changeDue.toFixed(2) === totalCashInRegister.toFixed(2)) {
        return { status: "CLOSED", change: cid };
    }

    let changeArr = [];
    cid = cid.reverse();

    for (let i = 0; i < cid.length; i++) {
        let [currencyName, currencyAmount] = cid[i];
        let currencyValue = currencyValues[currencyName];
        let currencyAvailable = currencyAmount / currencyValue;
        let currencyToReturn = 0;

        while (changeDue >= currencyValue && currencyAvailable > 0) {
            changeDue -= currencyValue;
            changeDue = changeDue.toFixed(2);
            currencyAvailable--;
            currencyToReturn++;
        }

        if (currencyToReturn > 0) {
            changeArr.push([currencyName, currencyToReturn * currencyValue]);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArr };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["", 60], ["ONE HUNDRED", 100]]);