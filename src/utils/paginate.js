export function paginate(items, pageNumder, pageSize) {
    const startIndex = (pageNumder - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
