const classNames = (...arg: string[]) => {
    return arg.join(" ").replaceAll(/\s+[-]/g, "_");
};

export default classNames;