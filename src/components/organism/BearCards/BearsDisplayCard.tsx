import { useShallow } from "zustand/shallow";
import { useBearStore } from "../../../stores";
import { WhiteCard } from "../../shared/cards/WhiteCard";

export const BearsDisplayCard = () => {
  const bears = useBearStore(useShallow((state) => state.bears));
  const doNothing = useBearStore((state) => state.doNothing);
  const addBear = useBearStore((state) => state.addBear);
  const clearBears = useBearStore((state) => state.clearBears);
  return (
    <WhiteCard centered className="px-1">
      <h1>Osos</h1>
      <button onClick={doNothing}>Do Nothing</button>
      <button onClick={addBear} className="mt-2">
        Agrega Oso
      </button>
      <button onClick={clearBears} className="mt-2">
        Limpia Oso
      </button>
      <pre className="w-full text-wrap text-xs">
        {" "}
        {JSON.stringify(bears, null, 2)}
      </pre>
    </WhiteCard>
  );
};
