"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePicker = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const picker_1 = require("@react-native-picker/picker");
const zeroPad_1 = require("./utils/zeroPad");
const MAX_MINUTES = 59;
const MAX_SECONDS = 59;
function TimePicker(_a) {
    var _b, _c, _d;
    var { value, onChange, hoursUnit, minutesUnit, secondsUnit, zeroPadding = false, textColor, hoursInterval = 1, minutesInterval = 1, secondsInterval = 1, pickerShows = ['hours', 'minutes'], emptyLabel, isAmpm, ampmLocalization = {
        am: 'am',
        pm: 'pm',
    } } = _a, others = tslib_1.__rest(_a, ["value", "onChange", "hoursUnit", "minutesUnit", "secondsUnit", "zeroPadding", "textColor", "hoursInterval", "minutesInterval", "secondsInterval", "pickerShows", "emptyLabel", "isAmpm", "ampmLocalization"]);
    let MAX_HOURS = 23;
    if (isAmpm) {
        MAX_HOURS = MAX_HOURS / 2;
    }
    if (hoursInterval > MAX_HOURS ||
        minutesInterval > MAX_MINUTES ||
        secondsInterval > MAX_SECONDS) {
        throw new Error('value of hoursInterval, minutesInterval or secondsInterval is invalid.');
    }
    const [internalHours, setInternalHours] = React.useState((_b = value === null || value === void 0 ? void 0 : value.hours) !== null && _b !== void 0 ? _b : 0);
    const [internalMinutes, setInternalMinutes] = React.useState((_c = value === null || value === void 0 ? void 0 : value.minutes) !== null && _c !== void 0 ? _c : 0);
    const [internalSeconds, setInternalSeconds] = React.useState((_d = value === null || value === void 0 ? void 0 : value.minutes) !== null && _d !== void 0 ? _d : 0);
    const [internalAmpm, setInternalAmpm] = React.useState(isAmpm ? value === null || value === void 0 ? void 0 : value.ampm : undefined);
    React.useEffect(() => {
        var _a, _b, _c, _d;
        setInternalHours((_a = value === null || value === void 0 ? void 0 : value.hours) !== null && _a !== void 0 ? _a : 0);
        setInternalMinutes((_b = value === null || value === void 0 ? void 0 : value.minutes) !== null && _b !== void 0 ? _b : 0);
        setInternalSeconds((_c = value === null || value === void 0 ? void 0 : value.seconds) !== null && _c !== void 0 ? _c : 0);
        setInternalAmpm((_d = value === null || value === void 0 ? void 0 : value.ampm) !== null && _d !== void 0 ? _d : undefined);
    }, [value]);
    const getLabel = (i, unit) => {
        const numString = zeroPadding ? zeroPad_1.zeroPad(i) : i.toString();
        return `${numString} ${unit !== null && unit !== void 0 ? unit : ''}`;
    };
    const getHoursItems = () => {
        const items = [];
        if (!pickerShows.includes('hours')) {
            return items;
        }
        if (emptyLabel != null) {
            items.push(<picker_1.Picker.Item testID="hoursItem" key="nullHoursItem" value="" label={emptyLabel} color={textColor}/>);
        }
        for (let i = isAmpm ? 1 : 0; i <= (isAmpm ? MAX_HOURS + 1 : MAX_HOURS); i += hoursInterval) {
            items.push(<picker_1.Picker.Item testID="hoursItem" key={i} value={i} label={getLabel(i, hoursUnit)} color={textColor}/>);
        }
        return items;
    };
    const getMinutesItems = () => {
        const items = [];
        if (!pickerShows.includes('minutes')) {
            return items;
        }
        if (emptyLabel != null) {
            items.push(<picker_1.Picker.Item testID="minutesItem" key="nullMinutesItem" value="" label={emptyLabel} color={textColor}/>);
        }
        for (let i = 0; i <= MAX_MINUTES; i += minutesInterval) {
            items.push(<picker_1.Picker.Item testID="minutesItem" key={i} value={i} label={getLabel(i, minutesUnit)} color={textColor}/>);
        }
        return items;
    };
    const getSecondsItems = () => {
        const items = [];
        if (!pickerShows.includes('seconds')) {
            return items;
        }
        if (emptyLabel != null) {
            items.push(<picker_1.Picker.Item testID="secondsItem" key="nullSecondsItem" value="" label={emptyLabel} color={textColor}/>);
        }
        for (let i = 0; i <= MAX_SECONDS; i += secondsInterval) {
            items.push(<picker_1.Picker.Item testID="secondsItem" key={i} value={i} label={getLabel(i, secondsUnit)} color={textColor}/>);
        }
        return items;
    };
    const handleChangeHours = (hours) => {
        setInternalHours(hours);
        const newValue = {
            hours,
            minutes: internalMinutes,
            seconds: internalSeconds,
            ampm: internalAmpm,
        };
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    const handleChangeMinutes = (minutes) => {
        setInternalMinutes(minutes);
        const newValue = {
            hours: internalHours,
            minutes,
            seconds: internalSeconds,
            ampm: internalAmpm,
        };
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    const handleChangeSeconds = (seconds) => {
        setInternalSeconds(seconds);
        const newValue = {
            hours: internalHours,
            minutes: internalMinutes,
            seconds,
            ampm: internalAmpm,
        };
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    const handleChangeAmpm = (ampmValue) => {
        setInternalAmpm(ampmValue);
        const newValue = {
            hours: internalHours,
            minutes: internalMinutes,
            seconds: internalSeconds,
            ampm: ampmValue,
        };
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    return (<react_native_1.View style={styles.container}>
      {pickerShows.includes('hours') && (<picker_1.Picker testID="hoursPicker" style={styles.picker} selectedValue={internalHours} onValueChange={(itemValue) => handleChangeHours(itemValue)} {...others}>
          {getHoursItems()}
        </picker_1.Picker>)}

      {pickerShows.includes('minutes') && (<picker_1.Picker testID="minutesPicker" style={styles.picker} selectedValue={internalMinutes} onValueChange={(itemValue) => handleChangeMinutes(itemValue)} {...others}>
          {getMinutesItems()}
        </picker_1.Picker>)}

      {pickerShows.includes('seconds') && (<picker_1.Picker testID="secondsPicker" style={styles.picker} selectedValue={internalSeconds} onValueChange={(itemValue) => handleChangeSeconds(itemValue)} {...others}>
          {getSecondsItems()}
        </picker_1.Picker>)}

      {isAmpm && (<picker_1.Picker testID="ampmPicker" style={styles.picker} selectedValue={internalAmpm} onValueChange={(itemValue) => handleChangeAmpm(itemValue)} {...others}>
          <picker_1.Picker.Item testID="amItem" value="am" label={ampmLocalization.am} color={textColor}/>
          <picker_1.Picker.Item testID="pmItem" value="pm" label={ampmLocalization.pm} color={textColor}/>
        </picker_1.Picker>)}
    </react_native_1.View>);
}
exports.TimePicker = TimePicker;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    picker: {
        flex: 1,
    },
});
//# sourceMappingURL=TimePicker.js.map