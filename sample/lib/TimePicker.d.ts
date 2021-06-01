/// <reference types="react" />
import { PickerProps } from '@react-native-picker/picker/typings/Picker';
export declare type ValueMap = {
    hours: number;
    minutes: number;
    seconds: number;
    ampm?: 'am' | 'pm';
};
export interface TimePickerProps extends PickerProps {
    value?: Partial<ValueMap>;
    onChange?: (newValue: ValueMap) => void;
    hoursUnit?: string;
    minutesUnit?: string;
    secondsUnit?: string;
    zeroPadding?: boolean;
    textColor?: string;
    hoursInterval?: number;
    minutesInterval?: number;
    secondsInterval?: number;
    pickerShows?: Array<'hours' | 'minutes' | 'seconds'>;
    emptyLabel?: string;
    isAmpm?: boolean;
    ampmLocalization?: {
        am: string;
        pm: string;
    };
}
export declare function TimePicker({ value, onChange, hoursUnit, minutesUnit, secondsUnit, zeroPadding, textColor, hoursInterval, minutesInterval, secondsInterval, pickerShows, emptyLabel, isAmpm, ampmLocalization, ...others }: TimePickerProps): JSX.Element;
