/*
Program-40: Folder Explorer (Recursive Component)
Notes:
1. Recursive component renders folders and files.
2. useState hook tracks expanded/collapsed state for folders.
3. folderInfo.isFolder determines if node is folder or file.
4. Clicking folder toggles expand state.
5. Nested map calls recursively render subfolders/files.
6. Files are rendered with a different icon.
7. Dynamic inline styles used to show/hide nested items.
8. Recursion allows unlimited folder depth.
9. Can be extended for file selection or renaming.
10. Efficient rendering: only expanded folders show their children.
11. Functional components with recursion are simple for tree structures.
12. Key prop is required for map elements.
*/

import React, { useState } from "react";

export default function Folder({ folderInfo }) {
  const [expand, setExpand] = useState(false);

  if (folderInfo.isFolder) {
    return (
      <div>
        <span
          onClick={() => setExpand(!expand)}
          style={{ cursor: "pointer" }}
        >
          📁 {folderInfo.name}
        </span>
        <div style={{ display: expand ? "block" : "none", paddingLeft: "20px" }}>
          {folderInfo.items.map((sub, idx) => (
            <Folder key={idx} folderInfo={sub} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>📄 {folderInfo.name}</div>;
  }
}
