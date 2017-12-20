export const SITEMAP = {
    HOME: '/',
    QUESTIONS: '/questions',
    RESULT: '/result'
};

export const REDIRECT_LINK = {
    IMAGE: (name: string) => `dist/resources/${name}`,
    RESULT_PAGE: (count: number) => `${SITEMAP.RESULT}?count=${count}`
};
