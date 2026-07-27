# Project images

Put each project's images in its own folder under `public/projects/`.

Example structure:

- `public/projects/traditional-cms/cover.jpg`
- `public/projects/traditional-cms/gallery-1.jpg`
- `public/projects/traditional-cms/gallery-2.jpg`
- `public/projects/traditional-cms/gallery-3.jpg`

The app reads these paths from `src/data/projects.ts`.
If you add a new project, use the same folder pattern and update the filenames in the data file.
