const classNames = (...arg: string[]) => {
    console.log(arg);
    return arg.join(" ").replaceAll(/\s+[-]/g, "_");
};

export default classNames;