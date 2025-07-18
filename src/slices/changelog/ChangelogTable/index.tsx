import React from "react";
import { lineItem, date, label, activeLineItem } from "./index.css";
import { storyblokEditable } from "@storyblok/js";

interface ChangelogStory {
  id: number;
  name: string;
  updated_at: string;
  content: any;
  slug: string;
}

interface ChangelogTableProps {
  changelogs: ChangelogStory[];
}

export const ChangelogTable: React.FC<ChangelogTableProps> = ({
  changelogs,
}) => {
  const [activeItem, setActiveItem] = React.useState<number | null>(null);

  const handleMouseOver = (event: React.MouseEvent, index: number) => {
    setActiveItem(index);
    console.log("Mouse over item:", index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <>
      {changelogs.map((changelog, index) => (
        <div key={changelog.id || index}>
          <a
            {...storyblokEditable(changelog.content)}
            className={
              lineItem + " " + (activeItem === index ? activeLineItem : "")
            }
            onMouseEnter={(e) => handleMouseOver(e, index)}
            onMouseLeave={handleMouseLeave}
            href={"/changelogs/" + changelog.slug}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className={date}>{changelog.updated_at}</span>
            <div className={label}>{changelog.name}</div>
          </a>
        </div>
      ))}
    </>
  );
};
