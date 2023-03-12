import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({
    count: 0,
  });
  return (
    <div>
      <div>detail</div>
      <div>计数器={state.count}</div>
      <button onClick$={() => state.count++}>+1</button>
    </div>
  );
});
