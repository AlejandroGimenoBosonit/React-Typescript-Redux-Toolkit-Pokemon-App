
// We pass a function and a timeout cipher as arguments
export const debounce = (fn: Function, timeout: number) => {
    // timer variable setted as Timeout type
    let timer: ReturnType<typeof setTimeout>;

    // returning a timeout using our function and timeout number
    return (...args: any) => {
        
        // crear previous timeout
        clearTimeout(timer);

        // timeout
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, timeout);
    }
}