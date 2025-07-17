import { useAuth } from "./AuthContext";

/** Users can only this component if they are authorized by the API. */
export default function Dungeon() {
    const { d20Roll } = useAuth();
    return (
        <>
            <section>You rolled a {d20Roll}.</section>
            <section>
                <p>
                    The tablet vibrates and a jadeite chime rings through the
                    air.
                </p>
                <p>
                    The earth beneath your feet trembles as the badgers slowly
                    push the two doors of the gate open.
                </p>
                <p>
                    But unfortunately, you let out a small yet audible fart in
                    front of both the tablet and the badgers
                </p>
                <p>The tablet glows a dark purple. It looks...sad?</p>
                <p> The badgers look to each other.</p>
                <p>"Dungeon?" says the left one.</p>
                <p>"Dungeon," says the right.</p>
                <p>
                    They grab your arms and walk you away, away from your
                    destiny.
                </p>
                <p>Maybe don't eat so many beans next time.</p>
                <h2>GAME OVER.</h2>
            </section>
        </>
    );
}
