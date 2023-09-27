export const findActiveBlock = (blocks) => {
    const [value] = blocks.filter((block) => block.active);
    const index = blocks.findIndex((item) => item.active == true);
    if (value) {
        let result = {
            index: index,
            value: value,
            id: value.id,
        };
        return result;
    }
    return false;
};
