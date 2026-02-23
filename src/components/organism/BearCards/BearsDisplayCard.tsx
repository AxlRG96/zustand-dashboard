import { useShallow } from "zustand/shallow";
import { useBearStore } from "../../../stores";
import { WhiteCard } from "../../shared/cards/WhiteCard";

export const BearsDisplayCard = () => {
  const bears = useBearStore(useShallow((state) => state.bears));
  const doNothing = useBearStore((state) => state.doNothing);
  return (
    <WhiteCard centered>
      <h1>Osos</h1>
      <pre> {JSON.stringify(bears, null, 2)}</pre>
      <button onClick={doNothing}>Do Nothing</button>
    </WhiteCard>
  );
};
