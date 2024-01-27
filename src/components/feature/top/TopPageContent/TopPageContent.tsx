import { component$ } from "@builder.io/qwik";
import { PostCard } from "~/components/common/PostCard";
import { css } from "~/styled-system/css";

export const TopPageContent = component$(() => {
  return (
    <div
      class={css({
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(16rem,1fr))",
        gap: "2rem",
      })}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <PostCard key={i} title={`test post ${i}`} lastModifiedAt={new Date()} />
      ))}
    </div>
  );
});
