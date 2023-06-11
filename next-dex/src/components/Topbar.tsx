import { Search } from "@/components";

export function Topbar(): React.ReactElement {
  return (
    <div className="topbar">
      <div className="topbar__content">
        <h1 className="topbar__title">Next-dex</h1>

        <div>
          <Search />
        </div>
      </div>
    </div>
  );
}
