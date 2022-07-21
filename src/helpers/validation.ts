export const required = (x: string) => !!x

const emailRegExp = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
export const email = (val: string) => emailRegExp.test(val)

const passwordRegExp = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9.?/-]{8,24}$/
export const password = (val: string) => passwordRegExp.test(val)
