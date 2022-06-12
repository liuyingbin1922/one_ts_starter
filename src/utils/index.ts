type T = string | number;

export function unitChange(num: T) : T {
    return Number(num) / 100;
}