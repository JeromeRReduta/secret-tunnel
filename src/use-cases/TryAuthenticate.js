export default class TryAuthenticate {
    #link;
    #difficulty = 7;
    constructor({ apiBase, endpoint }) {
        this.#link = `${apiBase}/${endpoint}`;
    }

    async runAsync({ token }) {
        try {
            if (!token) {
                throw new Error("No token provided", token);
            }
            const d20Roll = Math.floor(Math.random() * 20);
            if (d20Roll < this.#difficulty) {
                return { success: false, roll: d20Roll };
            }
            const response = await fetch(this.#link, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            return { success: (await response.json()).success, roll: d20Roll };
        } catch (e) {
            console.error(e);
            return { sucess: false, roll: null };
        }
    }
}
