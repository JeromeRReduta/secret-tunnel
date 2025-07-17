export default class TrySignup {
    #link;

    constructor({ apiBase, endpoint }) {
        this.#link = `${apiBase}/${endpoint}`;
    }

    async runAsync({ username, password }) {
        try {
            const response = await fetch(this.#link, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            if (!response.ok) {
                throw new Error("POST ERROR", response);
            }
            return (await response.json()).token;
        } catch (e) {
            console.error(e);
        }
    }
}
