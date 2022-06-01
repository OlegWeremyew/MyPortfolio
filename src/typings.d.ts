declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png' {
    export default "" as string;
}

declare module '*.svg' {
    export default "" as string;
}