export const projectImagePath = (projectId: string, fileName: string) =>
  `/projects/${projectId}/${fileName}`;

export const projectGalleryPaths = (projectId: string, fileNames: string[]) =>
  fileNames.map((fileName) => projectImagePath(projectId, fileName));