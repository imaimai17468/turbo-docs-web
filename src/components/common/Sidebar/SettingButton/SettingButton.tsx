import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/Button";
import { LuSettings } from "@qwikest/icons/lucide";
import { HStack } from "~/styled-system/jsx";

export const SettingButton = component$(() => {
  return (
    <Button areaLabel="Settings">
      <HStack gap="0.5rem">
        <LuSettings />
        <p>Settings</p>
      </HStack>
    </Button>
  );
});
