SASS Architecture and Structure
One of the SASS best practices is the ability to divide your styling into separate files without compromising on performance. File organization is the best place to start with SASS development. In modular programming, the imports and partials are essential. 

The utility focuses on the variables and styles used throughout digital products. The reset folder is where you can create your version of a CSS Reset and specify everything about your webpage’s font.

This is only a recommendation, and it is just one of many options for organizing your files. Other approaches exist that employ alternative folder structures, such as “globals” for site-wide SCSS and “pages” for page-specific SCSS.

Let’s go over this suggested organizing method to see what each folder is for:

/globals – contains site-wide SASS files such as typography, colors, and grids 
/components – contains SASS files with component styles such as buttons, tables, or input fields 
/sections – contains SASS files dedicated to specific pages or areas on a page (might work better combined into the /components/ folder)
/utils – includes third-party utilities like Normalize that may be dynamically updated with tools like Bower. 
main.scss – the root folder’s principal SASS file that imports all others.


------ // ------ /Users/josealmeida/Desktop/LOCAL EDIT/EDIT-HTML-CSS-FINAL/SASS architecture/Sass-architecture-and-structure.jpg


Usually, the main SCSS file is created in the root of the SASS folder into which all other files are loaded. These files are listed in the order in which you want the style to be applied. CSS’s cascading nature can also be used.

Buttons, carousels, and other similar items will have structurally specific rules under the components folder. Each component should have its own file. The layout folder examines the page’s overall position. This is where you will define your grid, navbar, footer, and other elements. The pages folder examines the style of each individual page.

This is only a starting point; there is plenty of space for you to add your own ideas. However, regardless of how you structure your SCSS, it’s critical that you have some organization with a different file (or folder) for libraries like Normalize that need to be updated, as well as components in SASS partials for your projects.

=> Reduce Mixin Usage
A mixin is an excellent way to add code sections numerous times inside a webpage. Including a mixin is equal to copying and pasting the styles across the CSS code. It generates a large amount of duplicate code and can clutter your CSS file. To quickly create changed styles, a mixin should be used only when an argument is provided. Otherwise, the code can be overloaded and will slow down the whole system.

=> Embrace Placeholders
Another SASS best practices is placeholders embracing. Placeholders, unlike mixins, may be used many times without providing any duplicate code. This makes them a far more user-friendly option for producing DRY CSS. The duplicated code in the placeholder is only written once, and only the unique styles are applied to the specific selectors. If the placeholder styles are not utilized, they are not output at all. 