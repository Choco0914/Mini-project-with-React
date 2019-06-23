export const createFrom = (indActivist, selectedItem) => {
  const Name = `# ${indActivist[selectedItem].name}`,
    Hungyeog = `## 훈격\n\n* ${indActivist[selectedItem].hungyeog}`,
    Seohun = `## 서훈년도\n\n* ${indActivist[selectedItem].seohun}`,
    Introduction = `## 서문\n\n ${indActivist[selectedItem].introduction}`;
  const form = {
    name: Name,
    hungyeong: Hungyeog,
    seohun: Seohun,
    introduction: Introduction
  };
  return form;
};
