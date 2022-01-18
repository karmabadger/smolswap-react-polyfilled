import { BigNumber } from 'ethers';

const DECIMALS = 18;

// string -> string
function strETHToWei(amountStr, decimals = DECIMALS) {
    const strLength = amountStr.length;
    const dotIndex = amountStr.indexOf('.');

    if (dotIndex === -1) {
        if (amountStr == 0) {
            return '0';
        }
        return amountStr + '0'.repeat(decimals);
    }

    const beforeDot = amountStr.substring(0, dotIndex);
    const afterDot = amountStr.substring(dotIndex + 1, strLength);

    if (beforeDot == 0) {
        return '0';
    } else if (afterDot.length < decimals) {
        return beforeDot + afterDot + '0'.repeat(decimals - afterDot.length);
    } else if (afterDot.length > decimals) {
        return beforeDot + afterDot.substring(0, decimals);
    } else {
        const result = beforeDot + afterDot.padEnd(decimals, '0');
        return result;
    }
}

// string -> string
function strWeiToETH(amountStr, precision = 2, decimals = DECIMALS) {
    const decimalsLength = amountStr.length - decimals;

    const beforeDot = amountStr.substring(0, decimalsLength);
    const afterDot = amountStr.substring(decimalsLength, (decimalsLength + precision));

    if (beforeDot == 0 && afterDot == 0) {
        console.log('beforeDot', beforeDot);
        console.log('afterDot', afterDot);
        return '0';
    } else if (beforeDot == 0) {
        return '0.' + afterDot;
    } else if (afterDot == 0) {
        return beforeDot;
    }
    let result = beforeDot + '.' + afterDot;

    return result;
}
export { DECIMALS, strETHToWei, strWeiToETH };