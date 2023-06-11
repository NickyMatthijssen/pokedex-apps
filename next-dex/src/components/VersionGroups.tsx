"use client";

import { useVersionGroupContext, Tabs, Tab } from "@/components";
import { VersionGroup, VERSION_GROUPS } from "@/services/constants";

export function VersionGroups(): React.ReactElement {
  const { group: currentGroup, setGroup } = useVersionGroupContext();

  return (
    <section>
      <h2>Versions</h2>

      <Tabs>
        {Object.keys(VERSION_GROUPS).map((group) => (
          <Tab
            onClick={() => setGroup(group as VersionGroup)}
            active={group === currentGroup}
            key={group}
          >
            {VERSION_GROUPS[group as VersionGroup]}
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}
