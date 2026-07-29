export default function ThemeScript() {
  const code = `
    (function() {
      try {
        var storedTheme = localStorage.getItem('theme');
        var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (storedTheme === 'dark' || (!storedTheme && supportDarkMode) || (storedTheme === 'system' && supportDarkMode)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

  return (
    <script
      id="theme-script"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
