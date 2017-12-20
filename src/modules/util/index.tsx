
export const parseQueryString = (query: string): any => {
    if (query.substr(0, 1) === '?') query = query.substring(1, query.length);
    return Object.assign(
        {},
        ...query.split('&').map(it => {
            const set = it.split('=');
            const emptyObject = {} as any;
            emptyObject[set[0]] = set[1];
            return emptyObject;
        })
    );
};
