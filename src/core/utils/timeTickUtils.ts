export function tickToSeconds(tickValue : number) : number {
    return tickValue / 20;
}

export function secondsToTick(seconds: number) : number {
    return seconds * 20;
}