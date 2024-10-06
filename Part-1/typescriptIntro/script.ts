function add(arg1: number, arg2: number) {
    return arg1 + arg2;
}

function concatenate(arg1: string, arg2: string) {
    return arg1 + arg2;
}

const a1 = 2;
const a2 = 3;
const r = add(a1, a2);

console.log(r);
console.log(typeof r);

const a4 = 'varun';
const a5 = ' kaushik';
console.log(concatenate(a4, a5));
