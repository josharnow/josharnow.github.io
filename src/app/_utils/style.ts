// NOTE - This HAS to be in the app folder, otherwise I get "Server Actions are not supported with static export."

// NOTE - Below is one of the preferred ways to do dynamic classes in Tailwind CSS
/**
 * Concatenates and returns a string of CSS class names.
 *
 * @param classes - The CSS class names to concatenate.
 * @returns A string of concatenated CSS class names.
 */
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
};