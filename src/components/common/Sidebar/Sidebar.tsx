import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Input } from "../Input";
import { Button } from "../Button";
import { LuSettings } from "@qwikest/icons/lucide";
import { Logo } from "../Logo";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarFooter } from "./SidebarFooter";
import { PostCreateButton } from "./PostCreateButton";

export const Sidebar = component$(() => {
  return (
    <div class={css({ width: "15rem" })}>
      <div
        class={css({
          position: "fixed",
          top: 0,
          left: 0,
          width: "15rem",
          height: "100vh",
          padding: "0.5rem",
          backgroundColor: "primary",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        })}
      >
        <div
          class={css({
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          })}
        >
          <Logo />
          <PostCreateButton />
          <Input placeholder="search" />
          <SidebarMenu />
          <hr class={css({ borderColor: "border" })} />
          <Button corner="rounded" outlined={false} variant="background">
            <div
              class={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "0.5rem",
              })}
            >
              <LuSettings />
              <p>Settings</p>
            </div>
          </Button>
        </div>
        <SidebarFooter />
      </div>
    </div>
  );
});
