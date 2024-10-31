declare const _default: {
    setConfig: ({ url, token }: {
        url: string;
        token: string;
    }) => void;
    Sector: {
        findAll: () => Promise<FCResponse<FCSectorItem[]>>;
    };
};
export default _default;
