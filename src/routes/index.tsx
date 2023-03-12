import { component$, useStore } from "@builder.io/qwik";
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
  const state = useStore({
    count: 0,
  });
  const nav = useNavigate();
  return (
    <div>
      <div>Home</div>
      <div>计数器={state.count}</div>
      <button onClick$={() => state.count + 1}>+1</button>
      <br />
      <button onClick$={()=>nav('/detail')}>跳转detail</button>
    </div>
  );
});
