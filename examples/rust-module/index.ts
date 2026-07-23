// index.ts - TypeScript example interacting with concepts from Rust

function add(a: number, b: number): number {
    return a + b;
}

console.log(`2 + 3 = ${add(2, 3)}`);

function greet(name: string): string {
    return `Hello, ${name} from TypeScript!`;
}

console.log(greet("Portfolio Visitor"));

export { add, greet };