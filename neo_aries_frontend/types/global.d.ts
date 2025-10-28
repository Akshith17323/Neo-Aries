// Type declarations for importing CSS files (side-effect and modules)
declare module '*.css' {
  const content: { [className: string]: string } | string;
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string } | string;
  export default content;
}

declare module '*.module.css' {
  const classes: { [className: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [className: string]: string };
  export default classes;
}

// Allow importing images and other static assets if needed
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
