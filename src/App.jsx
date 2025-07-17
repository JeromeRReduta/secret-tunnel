import { useAuth } from "./AuthContext";
import constants from "./constants";
import Dungeon from "./Dungeon";

import Entrance from "./Entrance";
import Tablet from "./Tablet";
import Tunnel from "./Tunnel";

export default function App() {
    const { location } = useAuth();

    if (location === constants.locations.entrance) return <Entrance />;
    if (location === constants.locations.tablet) return <Tablet />;
    if (location === constants.locations.dungeon) return <Dungeon />;
    return <Tunnel />;
}
