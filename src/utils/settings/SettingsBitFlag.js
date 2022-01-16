

const SettingsBitFlag = {
    // **************************
    // Settings using bit flags
    // **************************
    //
    // These bit flags are used to handle settings in the application.
    //
    // Each bit flag represents a setting.
    //
    // The bit flags are used to check if a setting is enabled or disabled
    // in the application.
    //
    // @type {uint16}

    // default settings bit flag is 0b00000000
    NONE: 0x0000,
    DEFAULT: 0x0000,

    // for if the price per item is set higher than the max price per item
    MAX_PRICE_PER_ITEM_EXCEEDED: 0x0001,
    // default: will skip the item.
    // if 0x01 is set, will by anyways without exceeding the max total spend allowance.

    // if the quantity of an item is less than the requested quantity (for ERC1155)
    INSUFFICIENT_QUANTITY_ERC1155: 0x0002,
    // default: will skip the item.
    // if 0x02 is set, will buy as many items as possible (all listed items)

    // if marketplace fails to buy an item for some reason
    MARKETPLACE_BUY_ITEM_REVERTED: 0x0004,
    // default: will skip the item.
    // if 0x04 is set, will revert the buy transaction.

    // if total spend allowance is exceeded
    MAX_SPEND_ALLOWANCE_EXCEEDED: 0x0008,
    // default: will skip the item and continue.
    // if 0x08 is set, will skill the item and stop the transaction.

    // if every single item fails to buy
    EVERY_BUY_FAILURE: 0x0010,
    // default: will simply refund the buyer and return.
    // if 0x10 is set, will revert the transaction.

    // turn on success event logging
    EMIT_SUCCESS_EVENT_LOGS: 0x0020,
    // default: will not log success events.
    // if 0x20 is set, will log success events.

    // turn on failure event logging
    EMIT_FAILURE_EVENT_LOGS: 0x0040,
    // default: will not log failure events.
    // if 0x40 is set, will log failure events.

    MAX_BUYS_SUCCESSES: 0x0080,
    MAX_BUY_FAILURES: 0x0100,

}


function checkSetting(inputSettings, settingBitFlag) {
    return (inputSettings & settingBitFlag) === settingBitFlag;
}

function checkSettings(inputSettings, settingBitFlagArray) {
    let sumSettingBitFlags = 0;
    for (let i = 0; i < settingBitFlagArray.length; i++) {
        sumSettingBitFlags |= settingBitFlagArray[i];
    }
    return (inputSettings & sumSettingBitFlags) === sumSettingBitFlags;
}

function buildFSettingsBitFlag(inputSettingBitFlagArray) {
    let inputSettings = SettingsBitFlag.NONE;
    for (let i = 0; i < inputSettingBitFlagArray.length; i++) {
        inputSettings |= inputSettingBitFlagArray[i];
    }
    return inputSettings;
}

export { SettingsBitFlag, checkSetting, checkSettings, buildFSettingsBitFlag };