import React, { useEffect } from "react";
import "./TextSphere.scss";
import TagCloud from "TagCloud";

const TextShpere = () => {

  useEffect(() => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "GIT",
        "GitHub",
        "ES6",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;
